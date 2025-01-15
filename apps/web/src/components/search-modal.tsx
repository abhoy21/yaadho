import { SearchIcon } from "lucide-react";
import { useCallback, useEffect } from "react";

interface SearchModalProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  setModalOpen: (value: boolean) => void;
}

export function SearchModal({
  searchTerm,
  setSearchTerm,
  setModalOpen,
}: SearchModalProps): React.JSX.Element {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "Escape") {
        e.preventDefault();
        setModalOpen(false);
      }
    },
    [setModalOpen],
  );

  const handleOverlayInteraction = useCallback(
    (
      e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
    ): void => {
      if ("key" in e && (e.key === "Enter" || e.key === " ")) {
        setModalOpen(false);
      } else if ("target" in e && e.target === e.currentTarget) {
        setModalOpen(false);
      }
    },
    [setModalOpen],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4"
      onClick={handleOverlayInteraction}
      onKeyDown={handleOverlayInteraction}
      role="button"
      tabIndex={0}
    >
      <div className="relative">
        <SearchIcon className="absolute inset-0 left-4 top-1/2 z-20 h-5 w-5 -translate-y-1/2 text-gray-400 md:h-10 md:w-10" />

        <input
          className="w-64 rounded-xl border border-gray-500 bg-black/50 py-2 pl-16 pr-16 text-2xl text-gray-100 shadow-md backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-blue-200 md:w-[600px] md:py-6"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Find Something..."
          type="text"
          value={searchTerm}
        />
      </div>
    </div>
  );
}
