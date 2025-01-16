"use client";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useToast } from "../../hooks/use-toast";
import CardDisplay from "./card-display";
import CardSkeleton from "./card-skeleton";

enum ContentType {
  Text = "text",
  Link = "link",
}

interface ContentData {
  id: number;
  title: string;
  type: ContentType;
  content: string;
  tags?: string[];
  isPublic: boolean;
  createdAt: string;
}

export default function CardSectionPublic(): React.JSX.Element {
  const [cardData, setCardData] = useState<ContentData[]>([]);
  const [loading, setLoading] = useState(true);
  const { showToast, ToastContainer } = useToast();
  const pathName = usePathname();
  const shareLink = pathName.split("/")[2];

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get(`/api/v1/brain/${shareLink}`);
        console.log(response.data.content);
        setCardData(response.data.content);
      } catch (error) {
        showToast("Error fetching data", "error");
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, [showToast, shareLink]);

  return (
    <div className="net-pattern mx-auto max-w-7xl px-4 sm:px-6 md:max-w-[1500px] lg:px-8">
      <ToastContainer />
      <div className="hide-scrollbar mx-auto h-screen overflow-y-auto">
        <h1 className="text-text mb-6 text-2xl font-semibold md:text-4xl">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))
            : Array.isArray(cardData) &&
              cardData.map((item) => (
                <CardDisplay
                  content={item.content}
                  createdAt={item.createdAt}
                  id={item.id}
                  isPublic={item.isPublic}
                  key={item.id}
                  tags={item.tags || []}
                  title={item.title}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
