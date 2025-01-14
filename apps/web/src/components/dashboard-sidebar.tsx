"use client";
import { Button } from "@repo/ui/button";
import {
  ArrowLeftToLine,
  ArrowRightToLine,
  Github,
  Grid,
  LogOut,
  Menu,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";
import Logo from "./logo";
import LogoAlt from "./logo-alt";

export enum ContentFilter {
  ALL = "all",
  YOUTUBE = "youtube",
  TWITTER = "twitter",
  GITHUB = "github",
}

interface SidebarProps {
  onFilterChange: (filter: ContentFilter) => void;
  activeFilter: ContentFilter;
}

export function DashboardSidebar({
  onFilterChange,
  activeFilter,
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const filterItems = [
    { icon: <Grid />, label: "Dashboard", filter: ContentFilter.ALL },
    { icon: <Youtube />, label: "YouTube", filter: ContentFilter.YOUTUBE },
    { icon: <Twitter />, label: "Twitter", filter: ContentFilter.TWITTER },
    { icon: <Github />, label: "GitHub", filter: ContentFilter.GITHUB },
  ];

  const handleFilterChange = (filter: ContentFilter) => {
    onFilterChange(filter);
    setIsMobileOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: "/",
        redirect: true,
      });
    } catch (error) {
      console.error("error logging out user", error);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        icon={isMobileOpen ? undefined : <Menu />}
        className="fixed left-4 top-4 z-50 lg:hidden"
        onClick={() => setIsMobileOpen(true)}
      />

      {/* Sidebar Container */}
      <div
        className={`
          bg-secondary/20 fixed left-0 top-0 z-40 h-full shadow-xl backdrop-blur-md transition-all duration-300
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 
          ${isOpen ? "w-64" : "w-24"}
        `}
      >
        {/* Mobile Close Button */}
        <Button
          variant="ghost"
          size="icon"
          icon={<X />}
          className="absolute right-0 top-4 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Logo Area */}
        <div className="border-accent flex h-16 items-center justify-center ">
          {isOpen ? <Logo /> : <LogoAlt />}
          {/* Toggle Button (Desktop) */}
          <Button
            variant="secondary"
            size="icon"
            icon={
              isOpen ? (
                <ArrowLeftToLine className="text-background" />
              ) : (
                <ArrowRightToLine className="text-background" />
              )
            }
            className="absolute -right-4 top-2 hidden translate-x-1/2 transform lg:flex"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {/* Filter Items */}
        <nav className="flex flex-grow flex-col justify-between gap-6 p-4">
          {filterItems.map((item) => (
            <Button
              key={item.filter}
              variant={activeFilter === item.filter ? "primary" : "ghost"}
              size="lg"
              icon={item.icon}
              text={isOpen ? item.label : undefined}
              className={`
                 flex w-full items-center justify-center gap-4 p-2 md:justify-start
                 
                ${activeFilter === item.filter ? "bg-secondary text-white" : "text-secondary hover:text-secondary/50 "}
              `}
              onClick={() => handleFilterChange(item.filter)}
            />
          ))}
        </nav>

        <Button
          text={isOpen ? "Sign out" : undefined}
          variant="ghost"
          className="text-danger hover:text-danger/50 absolute bottom-4 right-4 w-full md:text-xl"
          icon={<LogOut className="w=5 h=5 text-danger" />}
          onClick={() => handleLogout()}
        />
      </div>
    </>
  );
}
