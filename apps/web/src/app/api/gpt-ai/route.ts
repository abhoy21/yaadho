import { GoogleGenerativeAI } from "@google/generative-ai";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { systemPrompt, userPrompt } from "./prompt";
import { searchData } from "./search-data";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { userQuery }: { userQuery: string } = (await req.json()) as {
      userQuery: string;
    };
    const searchResults = await searchData(userQuery);

    const organisedUserQuery: string = userPrompt(
      searchResults.userQuery,
      searchResults.jsonData,
    );

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text: systemPrompt,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
    });

    const result = await chat.sendMessage(organisedUserQuery);
    const response = result.response;

    return NextResponse.json(
      { response: response.candidates?.[0]?.content.parts[0]?.text },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 },
    );
  }
}
