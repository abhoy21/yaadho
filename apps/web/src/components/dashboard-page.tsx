"use client";
import { SessionProvider } from "next-auth/react";
import React, { useState } from "react";
import DashboardHeader from "./dashboard-header";
import DashboardNavbar from "./dashboard-navbar";
import { DashboardSidebar } from "./dashboard-sidebar";
export enum ContentFilter {
  ALL = "all",
  YOUTUBE = "youtube",
  TWITTER = "twitter",
  GITHUB = "github",
}
const DashboardPreviewPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<ContentFilter>(ContentFilter.ALL);
  return (
    <SessionProvider>
      <div className="bg-background net-pattern min-h-screen">
        <DashboardSidebar onFilterChange={setFilter} activeFilter={filter} />
        <div className="mx-auto p-4 md:ml-[120px] md:w-[calc(100%-120px)] md:p-6 lg:p-8">
          <DashboardNavbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <DashboardHeader />
        </div>
      </div>
    </SessionProvider>
  );
};

export default DashboardPreviewPage;
