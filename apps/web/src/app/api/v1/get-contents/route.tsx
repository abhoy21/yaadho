import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

interface Content {
  id: number;
  userId: number;
  title: string;
  content: string;
  type: string;
  isPublic: boolean;
  createdAt: Date;
}
interface Tag {
  contentId: number;
  name: string;
}

type TagsRecord = Record<number, string[]>;

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const token = await getToken({ req });
    console.log(token);
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const content = await prisma.content.findMany({
      where: {
        userId: token.userId,
      },
    });

    const tags: Tag[] = await prisma.tag.findMany({
      where: {
        contentId: {
          in: content.map((c: Content) => c.id),
        },
      },
    });

    const tagsList = tags.reduce<TagsRecord>((acc: TagsRecord, tag) => {
      const contentId = tag.contentId;
      if (!(contentId in acc)) {
        acc[contentId] = [];
      }
      acc[contentId].push(tag.name);
      return acc;
    }, {});

    const contents = content.map((c: Content) => {
      return {
        ...c,
        tags: tagsList[c.id],
      };
    });

    return NextResponse.json(contents, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error getting contents" },
      { status: 500 },
    );
  }
}
