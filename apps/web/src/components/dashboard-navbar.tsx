import Input from "@repo/ui/input";
import { SearchIcon } from "lucide-react";

export default function DashboardNavbar() {
  return (
    <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-8">
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
        <div>
          <h1 className="text-text font-montserrat ml-12 text-2xl font-semibold md:ml-32 md:text-4xl">
            Second Brain
          </h1>
          <h3 className="md:text-md ml-12 text-sm text-gray-500 md:ml-32">
            Have a look at what you&apos;ve saved up!
          </h3>
        </div>
        <div className="relative">
          <SearchIcon className="absolute inset-0 left-4 top-1/2 z-20 h-5 w-5 -translate-y-1/2 text-gray-600" />
          <Input
            type="text"
            placeholder="Find something"
            showIcon
            className="text-secondary shadow-secondary w-64 shadow-md md:w-[300px]"
          />

          <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 items-center space-x-1 text-sm text-gray-500 md:flex">
            <kbd className="bg-secondary/20 rounded-md px-2 py-1">⌘</kbd>
            <span className="text-gray-400">+</span>
            <kbd className="bg-secondary/20 rounded-md px-2 py-1">K</kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
