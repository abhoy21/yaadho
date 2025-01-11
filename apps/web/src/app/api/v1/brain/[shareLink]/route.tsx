import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const pathName = url.pathname;
    const parts = pathName.split("/");
    const shareLink = parts[parts.length - 1];
    console.log("Share Link Id: ", shareLink);

    const brain = await prisma.link.findUnique({
      where: {
        hash: shareLink,
      },
    });

    if (!brain) {
      return NextResponse.json({ message: "Brain not found" }, { status: 404 });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: brain.userId,
      },
    });

    const content = await prisma.content.findMany({
      where: {
        userId: user?.id,
        isPublic: true,
      },
    });

    if (!content) {
      return NextResponse.json(
        { message: "No content found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ content }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error retrieving brain" },
      { status: 500 },
    );
  }
}
