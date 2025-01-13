import { Button } from "@repo/ui/button";
import Input from "@repo/ui/input";
import { SearchIcon, Sparkles } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export default function DashboardNavbar({
  searchTerm,
  setSearchTerm,
}: NavbarProps) {
  const [aiModal, setAiModal] = useState<boolean>(false);
  return (
    <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-8">
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
        <div>
          <h1 className="text-text font-montserrat ml-12 text-2xl font-semibold md:ml-32 md:text-4xl">
            Yaadho
          </h1>
          <h3 className="text-accent ml-12 text-sm md:ml-32 md:text-base">
            Have a look at what you&apos;ve saved up!
          </h3>
        </div>
        <div className="relative ml-12 md:ml-0">
          <SearchIcon className="text-primary absolute inset-0 left-4 top-1/2 z-20 h-6 w-6 -translate-y-[57%]" />
          <Input
            type="text"
            placeholder="Find something"
            inputClassName="text-primary placeholder-secondary shadow-secondary/20 w-64 shadow-md md:w-[300px] py-2 md:py-4 pl-12 pr-16"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 items-center space-x-1 text-sm text-gray-500 md:flex">
            <kbd className="bg-secondary/20 rounded-md px-2 py-1">⌘</kbd>
            <span className="text-gray-400">+</span>
            <kbd className="bg-secondary/20 rounded-md px-2 py-1">K</kbd>
          </div>
        </div>

        <Button
          text="Ask AI"
          variant="primary"
          size="md"
          icon={<Sparkles className="h-5 w-5" />}
          className="h-12 w-64 transition-all duration-300  ease-in-out hover:scale-105 md:w-auto md:text-xl"
          onClick={() => setAiModal(true)}
        />
      </div>
    </div>
  );
}
