"use client";
import { EllipsisVertical, Globe, Lock, X } from "lucide-react";
import { useState } from "react";

import { Card } from "@repo/ui/card";
import CardOptions from "./card-options";
import { LinkPreview } from "./link-preview";

interface CustomCardProps {
  id: number;
  title: string;
  content: string;
  tags: string[];
  isPublic: boolean;
  createdAt: string;
}

export default function CardDisplay({
  id,
  title,
  content,
  tags,
  isPublic,
  createdAt,
}: CustomCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const isValidUrl = (url: string): boolean => {
    const regex =
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be|twitter\.com|notion\.so|linkedin\.com|instagram\.com|facebook\.com|github\.com|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/;
    return regex.test(url);
  };

  return (
    <Card className="bg-secondary/40 backdrop-blur-md">
      <Card.Header isPublic={isPublic} onClick={() => setModalOpen(!modalOpen)}>
        <Card.Tags tags={tags} className="text-accent ml-4" />

        <div className="sm:text-md text-accent mt-4 text-sm font-medium lg:text-lg">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setModalOpen(!modalOpen);
            }}
            className="cursor-pointer"
          >
            {!modalOpen ? (
              <EllipsisVertical />
            ) : (
              <X
                onClick={(e) => {
                  e.stopPropagation();
                  setModalOpen(false);
                }}
              />
            )}

            {modalOpen && (
              <CardOptions
                setModalOpen={setModalOpen}
                cardId={id}
                content={content}
                isPublic={isPublic}
              />
            )}
          </div>
        </div>
      </Card.Header>
      <Card.Title className="text-text font-montserrat">{title}</Card.Title>
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
            Created at
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
