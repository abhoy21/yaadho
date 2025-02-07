import { hash } from "bcrypt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { User } from "../../../../../types/user-types";
import { prisma } from "../../../../lib/prisma";
import { signupSchema } from "../../../../lib/zod-schema";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = (await req.json()) as User;
    console.log("body", body);
    const validation = await signupSchema.safeParseAsync(body);
    console.log("validation", validation);
    if (!validation.success) {
      const errors = validation.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));
      return NextResponse.json({ errors }, { status: 400 });
    }

    const { username, email, password } = validation.data;

    const existingEmail = await prisma.user.findUnique({
      where: { email },
    });

    const existingUsername = await prisma.user.findUnique({
      where: { username },
    });

    if (existingEmail) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 400 },
      );
    }

    if (existingUsername) {
      return NextResponse.json(
        { message: "Username already taken" },
        { status: 400 },
      );
    }

    const hashedPassword = await hash(password, 10);
    console.log("hashedPassword", hashedPassword);
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
    console.log("newUser", newUser);
    return NextResponse.json(
      { message: "User created successfully", newUser },
      { status: 201 },
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Error creating user",
      },
      { status: 500 },
    );
  }
}
