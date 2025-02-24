import { prisma } from "../../../lib/prisma";

interface SearchResponse {
  userQuery: string;
  jsonData: {
    Content: {
      id: number;
      title: string;
      type: string;
      userId: number;
      isPublic: boolean;
      createdAt: string;
      content: string;
      tags: string[];
    }[];
  };
}

interface ContentItem {
  id: number;
  title: string;
  type: { toString: () => string };
  userId: number;
  isPublic: boolean;
  createdAt: { toISOString: () => string };
  content: string;
  tags: { name: string }[];
}

export const searchData = async (
  query: string,
  userId: number,
): Promise<SearchResponse> => {
  const searchTerms = query
    .toLowerCase()
    .replace(/tagged|show me|notes|containing|about/gi, "")
    .trim()
    .split(/\s+/)
    .filter((term) => term.length > 0);

  const content = await prisma.content.findMany({
    where: {
      userId,
      OR: [
        {
          title: {
            contains: searchTerms.join(" "),
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: searchTerms.join(" "),
            mode: "insensitive",
          },
        },
        {
          tags: {
            some: {
              name: {
                in: searchTerms,
                mode: "insensitive",
              },
            },
          },
        },
      ],
    },
    include: {
      tags: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    userQuery: query,
    jsonData: {
      Content: content.map((item: ContentItem) => ({
        id: item.id,
        title: item.title,
        type: item.type.toString(),
        userId: item.userId,
        isPublic: item.isPublic,
        createdAt: item.createdAt.toISOString(),
        content: item.content,
        tags: item.tags.map((tag) => tag.name),
      })),
    },
  };
};
