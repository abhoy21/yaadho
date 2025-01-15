import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { Content } from "../../../../../types/content-types";
import { prisma } from "../../../../lib/prisma";
import { addContentSchema } from "../../../../lib/zod-schema";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const token = await getToken({ req });
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const body: Content = (await req.json()) as Content;
    const validation = addContentSchema.safeParse(body);
    if (!validation.success) {
      const errors = validation.error.errors;

      return NextResponse.json({ message: errors }, { status: 400 });
    }

    const { title, type, content, tags, isPublic } = validation.data;

    const newContent = await prisma.content.create({
      data: {
        title,
        type,
        content,
        tags: {
          create: tags.map((tag: string) => ({
            name: tag,
          })),
        },
        user: {
          connect: {
            id: token.userId,
          },
        },
        isPublic,
      },
      select: {
        id: true,
        title: true,
        type: true,
        content: true,
        tags: true,
        isPublic: true,
      },
    });

    return NextResponse.json(
      { message: "Content created successfully", content: newContent },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating content" },
      { status: 500 },
    );
  }
}
