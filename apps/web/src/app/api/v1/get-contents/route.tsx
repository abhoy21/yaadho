import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req });

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const content = await prisma.content.findMany({
      where: {
        userId: token?.userId,
      },
    });

    const tags = await prisma.tag.findMany({
      where: {
        contentId: {
          in: content.map((content) => content.id),
        },
      },
    });

    const tagsList = tags.reduce<Record<number, string[]>>(
      (acc, tag) => {
        if (!acc[tag.contentId]) {
          acc[tag.contentId] = [];
        }
        acc[tag.contentId].push(tag.name);
        return acc;
      },
      {} as Record<number, string[]>,
    );

    const contents = content.map((content) => {
      return {
        ...content,
        tags: tagsList[content.id] || [],
      };
    });

    return NextResponse.json(contents, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error getting contents" },
      { status: 500 },
    );
  }
}
