import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { signupSchema } from "../../../../lib/zod-schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = await signupSchema.safeParseAsync(body);

    if (!validation.success) {
      const errors = validation.error.errors;
      return NextResponse.json({ message: errors }, { status: 400 });
    }

    const { username, email, password } = body;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
        username,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        username: true,
      },
    });

    return NextResponse.json(
      { message: "User created successfully", newUser },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 },
    );
  }
}
