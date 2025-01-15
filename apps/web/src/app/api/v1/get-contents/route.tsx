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

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const token = await getToken({ req });

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const content = await prisma.content.findMany({
      where: {
        userId: token.userId,
      },
    });

    const tags = await prisma.tag.findMany({
      where: {
        contentId: {
          in: content.map((c) => c.id),
        },
      },
    });

    const tagsList = tags.reduce<Record<number, string[]>>((acc, tag) => {
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
