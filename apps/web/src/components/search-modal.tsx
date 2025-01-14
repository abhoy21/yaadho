import { SearchIcon } from "lucide-react";
import { useCallback, useEffect } from "react";

interface SearchModalProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  setmodalOpen: (value: boolean) => void;
}

export function SearchModal({
  searchTerm,
  setSearchTerm,
  setmodalOpen,
}: SearchModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "Escape") {
        e.preventDefault();
        setmodalOpen(false);
      }
    },
    [setmodalOpen],
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setmodalOpen(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex  items-center justify-center bg-black/50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="relative">
        <SearchIcon className="absolute inset-0 left-4 top-1/2 z-20 h-5 w-5 -translate-y-1/2 text-gray-400 md:h-10 md:w-10" />

        <input
          type="text"
          placeholder="Find Something..."
          value={searchTerm}
          autoFocus
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-64 rounded-xl border border-gray-500 bg-black/50 py-2 pl-16 pr-16 text-2xl text-gray-100 shadow-md backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-blue-200 md:w-[600px] md:py-6"
        />
      </div>
    </div>
  );
}
