"use client";

import { Button } from "@repo/ui/button";
import { Modal } from "@repo/ui/modal";
import axios from "axios";
import { Eye, Globe, Lock, Trash2 } from "lucide-react";
import { useToast } from "../../hooks/useToast";

interface CardOptionsProps {
  setModalOpen: (value: boolean) => void;
  cardId: number;
  content: string;
  isPublic: boolean;
}

export default function CardOptions({
  setModalOpen,
  cardId,
  content,
  isPublic,
}: CardOptionsProps) {
  const { showToast } = useToast();

  const handleDelete = async () => {
    try {
      const response = await axios.delete("api/v1/delete-content", {
        data: {
          id: cardId,
        },
      });
      const toastMessage =
        response.data.message || "Content deleted successfully!";
      showToast(toastMessage, "success");
      setModalOpen(false);
    } catch (error) {
      console.log(error);
      const errorMessage = "Content delete failed.";
      showToast(errorMessage, "error");
    }
  };

  const handlePreview = () => {
    window.open(content, "_blank");
    setModalOpen(false);
  };

  const handleTogglePublic = async () => {
    try {
      const response = await axios.post("api/v1/update-status", {
        id: cardId,
        isPublic: !isPublic,
      });

      const toastMessage =
        response.data.message || "Content toggled successfully!";
      showToast(toastMessage, "success");
      setModalOpen(false);
    } catch (error: any) {
      console.log(error);
      const errorMessage =
        error.response?.data?.message || "Content toggle failed.";
      showToast(errorMessage, "error");
    }
  };

  return (
    <Modal
      isOpen={true}
      onClose={() => setModalOpen(false)}
      className="bg-accent/90 w-full max-w-sm rounded-3xl p-6"
    >
      <Modal.Header>
        <Modal.Title>Options</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center">
            {isPublic ? (
              <Globe className="h-5 w-5 text-blue-600" />
            ) : (
              <Lock className="h-5 w-5 text-red-600" />
            )}
            <span className="text-background ml-2">
              {isPublic ? "This card is public" : "This card is private"}
            </span>
          </div>
          <Button
            type="button"
            variant="ghost"
            text={isPublic ? "Make Private" : "Make Public"}
            icon={
              isPublic ? <Lock className="mr-2" /> : <Globe className="mr-2" />
            }
            onClick={handleTogglePublic}
            className="text-text flex items-center rounded p-2 text-base hover:bg-gray-100"
          />

          <Button
            type="button"
            text="Preview"
            variant="ghost"
            icon={<Eye className="mr-2" />}
            onClick={handlePreview}
            className="text-text flex items-center rounded p-2 text-base hover:bg-gray-100"
          />

          <Button
            type="button"
            text="Delete"
            variant="ghost"
            icon={<Trash2 className="mr-2" />}
            onClick={handleDelete}
            className="flex items-center rounded p-2 text-base text-red-600 hover:bg-red-100"
          />
        </div>
      </Modal.Content>
      <Modal.Footer>
        <Button
          type="button"
          text="Close"
          variant="outline"
          onClick={() => setModalOpen(false)}
          className="w-full rounded bg-red-200 py-2 text-red-700 hover:bg-red-500"
        />
      </Modal.Footer>
    </Modal>
  );
}
