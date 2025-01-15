"use client";

import { Button } from "@repo/ui/button";
import Input from "@repo/ui/input";
import { Modal } from "@repo/ui/modal";
import axios from "axios";
import { BadgeInfoIcon, Check, Copy, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "../../hooks/use-toast";
import Logo from "./logo";

interface ShareBrainResponse {
  brain: {
    hash: string;
  };
}

export function ShareBrainModal({
  setIsModalOpen,
}: {
  setIsModalOpen: (value: boolean) => void;
}): React.JSX.Element {
  const [shareLink, setShareLink] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { showToast, ToastContainer } = useToast();

  const handleCopy = async (): Promise<void> => {
    if (shareLink) {
      try {
        await navigator.clipboard.writeText(shareLink);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      } catch (error) {
        showToast("Error copying link", "error");
      }
    }
  };

  useEffect(() => {
    const fetchShareLink = async (): Promise<void> => {
      setLoading(true);
      try {
        const response = await axios.post<ShareBrainResponse>(
          "api/v1/share-brain",
          {
            share: true,
          },
        );
        const hash = response.data.brain.hash;
        setShareLink(`${window.location.origin}/dashboard/${hash}`);
      } catch (error) {
        showToast("Error sharing Link", "error");
      } finally {
        setLoading(false);
      }
    };

    void fetchShareLink();
  }, [showToast]);

  return (
    <Modal
      className="w-full max-w-md p-6"
      isOpen
      onClose={() => {
        setIsModalOpen(false);
      }}
    >
      <ToastContainer />
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
            inputClassName="overflow-hidden whitespace-nowrap text-ellipsis"
            placeholder="Shareable link"
            readOnly
            type="text"
            value={shareLink}
          />
        )}
        <Button
          aria-label="Copy link"
          className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
          icon={isCopied ? <Check className="h-5 w-5" /> : <Copy />}
          onClick={handleCopy}
          size="icon"
          variant="ghost"
        />
      </div>

      {/* Share Options */}
      <div className="flex justify-center gap-4">
        <Button
          className="hover:scale-105 focus:outline-none"
          onClick={handleCopy}
          size="lg"
          text="Copy Link"
          variant="primary"
        />
        <Button
          className="bg-red-300 text-red-700 hover:scale-105 focus:outline-none"
          onClick={() => {
            setIsModalOpen(false);
          }}
          size="lg"
          text="Cancel"
          variant="danger"
        />
      </div>

      {/* Close Icon Button */}
      <Button
        aria-label="Close modal"
        className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        icon={<X className="h-5 w-5" />}
        onClick={() => {
          setIsModalOpen(false);
        }}
      />
    </Modal>
  );
}
