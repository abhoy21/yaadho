"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import CardDisplay from "./card-display";
import { CardSkeleton } from "./card-skeleton";
import { ContentFilter } from "./dashboard-sidebar";

enum ContentType {
  text = "text",
  link = "link",
}

interface ContentData {
  id: number;
  title: string;
  type: ContentType;
  content: string;
  tags: string[];
  isPublic: boolean;
  createdAt: string;
}

interface ContentFilterProps {
  activeFilter: ContentFilter;
  searchTerm: string;
}

export default function CardSection({
  activeFilter,
  searchTerm,
}: ContentFilterProps) {
  const [cardData, setCardData] = useState<ContentData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("api/v1/get-contents");
        setCardData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = cardData.filter((item) => {
    if (activeFilter === ContentFilter.ALL) return true;

    const regex = new RegExp(
      activeFilter === ContentFilter.YOUTUBE
        ? "(youtube.com|youtu.be)"
        : activeFilter,
      "i",
    );
    return (
      regex.test(item.title) ||
      regex.test(item.content) ||
      item.tags.some((tag) => regex.test(tag))
    );
  });

  const searchedData = cardData.filter((item) => {
    const searchMatch =
      !searchTerm ||
      new RegExp(searchTerm, "i").test(item.title) ||
      new RegExp(searchTerm, "i").test(item.content) ||
      item.tags.some((tag) => new RegExp(searchTerm, "i").test(tag));
    return searchMatch;
  });

  const displayData = searchTerm ? searchedData : filteredData;

  return (
    <div className="net-pattern mx-auto max-w-7xl px-4 sm:px-6 md:max-w-[1500px] lg:px-8">
      <div className="hide-scrollbar mx-auto h-screen overflow-y-auto">
        <h1 className="mb-6 text-2xl font-semibold text-[#2D2D2D] md:text-4xl">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading
            ? [...Array(12)].map((_, index) => <CardSkeleton key={index} />)
            : displayData.map((item, index) => (
                <CardDisplay
                  id={item.id} // Use item.id for a unique key
                  title={item.title}
                  content={item.content}
                  tags={item.tags}
                  isPublic={item.isPublic}
                  createdAt={item.createdAt}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
