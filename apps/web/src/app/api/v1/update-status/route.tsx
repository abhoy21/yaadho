import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req });

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id, isPublic } = await req.json();

    const response = await prisma.content.update({
      where: {
        id: id,
        userId: token?.userId,
      },
      data: {
        isPublic: isPublic,
      },
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error updating content status" },
      { status: 500 },
    );
  }
}
