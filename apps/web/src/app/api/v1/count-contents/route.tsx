import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const token = await getToken({ req });

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const totalCount = await prisma.content.count({
      where: {
        userId: token.userId,
      },
    });

    const publicCount = await prisma.content.count({
      where: {
        userId: token.userId,
        isPublic: true,
      },
    });

    const privateCount = await prisma.content.count({
      where: {
        userId: token.userId,
        isPublic: false,
      },
    });

    return NextResponse.json(
      {
        stats: {
          total: totalCount,
          public: publicCount,
          private: privateCount,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error getting contents" },
      { status: 500 },
    );
  }
}
