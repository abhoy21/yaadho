"use client";
import { SessionProvider } from "next-auth/react";
import React, { useState } from "react";
import { ContentFilter } from "../../types/content-filter-types";
import CardSection from "./card-section";
import DashboardHeader from "./dashboard-header";
import DashboardNavbar from "./dashboard-navbar";
import { DashboardSidebar } from "./dashboard-sidebar";

export default function DashboardPreviewPage(): React.JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<ContentFilter>(ContentFilter.ALL);
  return (
    <SessionProvider>
      <div className="bg-background net-pattern min-h-screen">
        <DashboardSidebar activeFilter={filter} onFilterChange={setFilter} />
        <div className="mx-auto p-4 md:ml-[120px] md:w-[calc(100%-120px)] md:p-6 lg:p-8">
          <DashboardNavbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <DashboardHeader />
          <CardSection activeFilter={filter} searchTerm={searchTerm} />
        </div>
      </div>
    </SessionProvider>
  );
}
