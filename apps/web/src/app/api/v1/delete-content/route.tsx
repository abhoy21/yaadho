import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    const token = await getToken({ req });
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = (await req.json()) as { id: number };
    await prisma.tag.deleteMany({
      where: {
        contentId: id,
      },
    });

    const response = await prisma.content.delete({
      where: {
        id,
        userId: token.userId,
      },
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting content" },
      { status: 500 },
    );
  }
}
