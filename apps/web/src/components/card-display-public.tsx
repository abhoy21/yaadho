"use client";
import { Card } from "@repo/ui/card";
import { Globe, Lock } from "lucide-react";
import { useState } from "react";
import { LinkPreview } from "./link-preview";

interface CustomCardProps {
  id: number;
  title: string;
  content: string;
  tags: string[];
  isPublic: boolean;
  createdAt: string;
}

export default function CardDisplayPublic({
  title,
  content,
  tags,
  isPublic,
  createdAt,
}: CustomCardProps): React.JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);

  const isValidUrl = (url: string): boolean => {
    const regex = new RegExp(
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be|twitter\.com|notion\.so|linkedin\.com|instagram\.com|facebook\.com|github\.com|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(?<path>\/[^\s]*)?$/,
    );

    return regex.test(url);
  };

  return (
    <Card className="bg-secondary/40 backdrop-blur-md">
      <Card.Header
        isPublic={isPublic}
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
      >
        <Card.Tags className="text-accent ml-4" tags={tags} />
      </Card.Header>
      <Card.Title className="text-accent font-montserrat">{title}</Card.Title>
      <Card.Content className="bg-secondary/50 text-accent font-montserrat my-2 mb-4 h-[200px] overflow-hidden rounded-xl p-2 backdrop-blur-sm">
        {isValidUrl(content) ? (
          <LinkPreview url={content} />
        ) : (
          <p className="sm:text-md text-sm tracking-wider md:text-lg lg:text-xl">
            {content}
          </p>
        )}
      </Card.Content>

      <Card.Footer className="bg-secondary text-background">
        <div className="flex items-center">
          <p className="text-sm font-medium tracking-wider md:text-base">
            Date
          </p>
          <span className="mx-2 text-gray-900">⋮</span>
          <p className="font-mono text-sm font-medium md:text-base">
            {createdAt.split("T")[0]}
          </p>
        </div>
        <div className="flex items-center">
          {isPublic ? (
            <Globe className="h-3 w-3 text-blue-600 md:h-5 md:w-5" />
          ) : (
            <Lock className="text-danger h-3 w-3 md:h-5 md:w-5" />
          )}
          <span className="ml-2 text-sm md:text-lg">
            {isPublic ? "Public" : "Private"}
          </span>
        </div>
      </Card.Footer>
    </Card>
  );
}
