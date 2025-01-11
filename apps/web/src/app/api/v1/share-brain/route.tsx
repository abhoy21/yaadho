import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req });
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const { share } = await req.json();
    if (!share) {
      return NextResponse.json(
        { message: "No share link provided" },
        { status: 400 },
      );
    }

    const existingBrain = await prisma.link.findUnique({
      where: {
        userId: token?.userId,
      },
    });

    if (existingBrain) {
      return NextResponse.json(
        {
          message: "Existing brain retrieved",
          brain: existingBrain,
          isExisting: true,
        },
        { status: 200 },
      );
    }

    const shareableLink = await generateShareLink(Number(token?.userId));
    const newBrain = await prisma.link.create({
      data: {
        hash: shareableLink,
        user: {
          connect: {
            id: token?.userId,
          },
        },
      },
    });

    return NextResponse.json(
      { message: "Brain created", brain: newBrain, isExisting: false },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

const generateShareLink = async (userId: number): Promise<string> => {
  const length = 10;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomString = Array.from(
    { length },
    () => characters[Math.floor(Math.random() * characters.length)],
  ).join("");
  const timeStamp = Date.now().toString(36);
  return `${timeStamp}-${userId.toLocaleString()}-${randomString}`;
};
