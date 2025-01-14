"use client";

import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface CardHeaderProps {
  children: ReactNode;
  isPublic: boolean; // Added isPublic here
  className?: string;
  onClick?: () => void; // Added onClick here
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

interface CardTagsProps {
  tags: string[];
  className?: string;
}

// Components
function CardRoot({ children, className = "" }: CardProps): JSX.Element {
  return (
    <div className={`rounded-3xl border shadow-lg ${className}`}>
      {children}
    </div>
  );
}

function CardHeader({
  children,
  className = "",
  onClick,
}: CardHeaderProps): JSX.Element {
  return (
    <div
      className={`m-2 flex items-start justify-between ${className}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
}

function CardContent({
  children,
  className = "",
}: CardContentProps): JSX.Element {
  return (
    <div
      className={`m-4 max-h-[500px] min-h-[100px] py-4 tracking-wider ${className}`}
    >
      {children}
    </div>
  );
}

function CardFooter({
  children,
  className = "",
}: CardFooterProps): JSX.Element {
  return (
    <div
      className={`flex items-center justify-between rounded-b-2xl p-2 ${className}`}
    >
      {children}
    </div>
  );
}

function CardTitle({ children, className = "" }: CardTitleProps): JSX.Element {
  return (
    <h3
      className={`m-4 line-clamp-1 text-lg font-medium md:text-2xl ${className}`}
    >
      {children}
    </h3>
  );
}

function CardTags({ tags, className = "" }: CardTagsProps): JSX.Element {
  return (
    <div className={`m-4 text-sm font-medium ${className}`}>
      {tags.map((tag, index) => (
        <span className="inline-flex items-center" key={`tag-${tag}`}>
          {tag}
          {index < tags.length - 1 && (
            <span className="mx-2 text-blue-300">•</span>
          )}
        </span>
      ))}
    </div>
  );
}

// Compose Card object
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
  Title: CardTitle,
  Tags: CardTags,
});
