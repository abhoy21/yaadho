import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const token = await getToken({ req });

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id, isPublic } = (await req.json()) as {
      id: number;
      isPublic: boolean;
    };

    const response = await prisma.content.update({
      where: {
        id,
        userId: token.userId,
      },
      data: {
        isPublic,
      },
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating content status" },
      { status: 500 },
    );
  }
}
