"use client";

import { Button } from "@repo/ui/button"; // Ensure you import your Button component
import Input from "@repo/ui/input"; // Ensure you import your Input component
import { Modal } from "@repo/ui/modal"; // Ensure you import your Modal component
import axios from "axios";
import { BadgeInfoIcon, Check, Copy, X } from "lucide-react"; // Import the close icon
import { useEffect, useState } from "react";
import Logo from "./logo"; // Ensure you import your Logo component

export const ShareBrainModal = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (value: boolean) => void;
}) => {
  const [shareLink, setShareLink] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const handleCopy = async () => {
    if (shareLink) {
      try {
        await navigator.clipboard.writeText(shareLink);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
      } catch (error) {
        console.error("Failed to copy:", error);
      }
    }
  };

  useEffect(() => {
    const fetchShareLink = async () => {
      setLoading(true);
      try {
        const response = await axios.post("api/v1/share-brain", {
          share: true,
        });
        const hash = response.data.brain.hash;
        setShareLink(`${window.location.origin}/dashboard/${hash}`);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchShareLink();
  }, []);

  return (
    <Modal
      isOpen={true}
      onClose={() => setIsModalOpen(false)}
      className="w-full max-w-md p-6"
    >
      <div className="mb-6 flex flex-col items-center">
        <div className="mb-4 flex h-16 px-4">
          <Logo />
        </div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">
          Share Brain
        </h1>
        <p className="flex items-start gap-2 px-4 text-center text-sm text-gray-500">
          <BadgeInfoIcon className="h-5 w-5 text-blue-400" />
          Only public content will be visible to others you share your brain
          with!
        </p>
      </div>

      {/* Input Section */}
      <div className="mb-4 flex items-center justify-center">
        {loading ? (
          <div className="flex items-center">
            <div className="w-full animate-pulse">
              <div className="h-12 rounded-xl bg-gray-200" />
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="h-6 w-6 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        ) : (
          <Input
            type="text"
            value={shareLink}
            readOnly
            placeholder="Shareable link"
            inputClassName="overflow-hidden whitespace-nowrap text-ellipsis"
          />
        )}
        <button
          onClick={handleCopy}
          className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
          aria-label="Copy link"
        >
          {isCopied ? (
            <Check className="h-6 w-6" />
          ) : (
            <Copy className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Share Options */}
      <div className="flex justify-center gap-4">
        <Button
          onClick={handleCopy}
          variant="primary"
          text="Copy Link"
          size="lg"
          className="hover:scale-105 focus:outline-none"
        />
        <Button
          onClick={() => setIsModalOpen(false)}
          variant="danger"
          text="Cancel"
          size="lg"
          className="bg-red-300 text-red-700 hover:scale-105 focus:outline-none"
        />
      </div>

      {/* Close Icon Button */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="Close modal"
      >
        <X className="h-5 w-5" />
      </button>
    </Modal>
  );
};
