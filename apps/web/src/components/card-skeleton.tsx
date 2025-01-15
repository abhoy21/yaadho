import { Card } from "@repo/ui/card";
import React from "react";

export default function CardSkeleton(): React.JSX.Element {
  return (
    <Card className="animate-pulse">
      <Card.Header className="flex justify-between" isPublic>
        <div className="w-1/2">
          <div className="h-6 rounded-md bg-gray-200" />
        </div>
        <div className="flex items-center">
          <div className="h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </Card.Header>
      <Card.Content className="flex-grow">
        <div className="h-32 rounded-md bg-gray-200" />
      </Card.Content>
      <Card.Footer>
        <div className="h-4 w-1/3 rounded-md bg-gray-200" />
        <div className="h-4 w-1/3 rounded-md bg-gray-200" />
      </Card.Footer>
    </Card>
  );
}
