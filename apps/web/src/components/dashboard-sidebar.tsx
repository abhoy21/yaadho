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
import { useCallback, useState } from "react";
import { ContentFilter } from "../../types/content-filter-types";
import Logo from "./logo";
import LogoAlt from "./logo-alt";

interface SidebarProps {
  onFilterChange: (filter: ContentFilter) => void;
  activeFilter: ContentFilter;
}

export function DashboardSidebar({
  onFilterChange,
  activeFilter,
}: SidebarProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const filterItems = [
    { icon: <Grid />, label: "Dashboard", filter: ContentFilter.ALL },
    { icon: <Youtube />, label: "YouTube", filter: ContentFilter.YOUTUBE },
    { icon: <Twitter />, label: "Twitter", filter: ContentFilter.TWITTER },
    { icon: <Github />, label: "GitHub", filter: ContentFilter.GITHUB },
  ];

  const handleFilterChange = useCallback(
    (filter: ContentFilter): void => {
      onFilterChange(filter);
      setIsMobileOpen(false);
    },
    [onFilterChange, setIsMobileOpen],
  );

  const handleLogout = useCallback(() => {
    void signOut({ callbackUrl: "/", redirect: true });
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        className="fixed left-4 top-4 z-50 lg:hidden"
        icon={isMobileOpen ? undefined : <Menu />}
        onClick={() => {
          setIsMobileOpen(true);
        }}
        size="icon"
        variant="ghost"
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
          className="absolute right-0 top-4 lg:hidden"
          icon={<X />}
          onClick={() => {
            setIsMobileOpen(false);
          }}
          size="icon"
          variant="ghost"
        />

        {/* Logo Area */}
        <div className="border-accent flex h-16 items-center justify-center ">
          {isOpen ? <Logo /> : <LogoAlt />}
          {/* Toggle Button (Desktop) */}
          <Button
            className="absolute -right-4 top-2 hidden translate-x-1/2 transform lg:flex"
            icon={
              isOpen ? (
                <ArrowLeftToLine className="text-background" />
              ) : (
                <ArrowRightToLine className="text-background" />
              )
            }
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            size="icon"
            variant="secondary"
          />
        </div>

        {/* Filter Items */}
        <nav className="flex flex-grow flex-col justify-between gap-6 p-4">
          {filterItems.map((item) => (
            <Button
              className={`
                 flex w-full items-center justify-center gap-4 p-2 md:justify-start
                 
                ${activeFilter === item.filter ? "bg-secondary text-white" : "text-secondary hover:text-secondary/50 "}
              `}
              icon={item.icon}
              key={item.filter}
              onClick={() => {
                handleFilterChange(item.filter);
              }}
              size="lg"
              text={isOpen ? item.label : undefined}
              variant={activeFilter === item.filter ? "primary" : "ghost"}
            />
          ))}
        </nav>

        <Button
          className="text-danger hover:text-danger/50 absolute bottom-4 right-4 w-full md:text-xl"
          icon={<LogOut className="w=5 h=5 text-danger" />}
          onClick={() => {
            handleLogout();
          }}
          text={isOpen ? "Sign out" : undefined}
          variant="ghost"
        />
      </div>
    </>
  );
}
