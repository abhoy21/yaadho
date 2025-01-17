"use client";

import { Button } from "@repo/ui/button";
import { Modal } from "@repo/ui/modal";
import axios from "axios";
import { Eye, Globe, Lock, Trash2 } from "lucide-react";
import { useToast } from "../../hooks/use-toast";

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
}: CardOptionsProps): React.JSX.Element {
  const { showToast } = useToast();

  const handleDelete = async (): Promise<void> => {
    try {
      await axios.delete("api/v1/delete-content", {
        data: {
          id: cardId,
        },
      });
      const toastMessage = "Content deleted successfully!";
      showToast(toastMessage, "success");
      setModalOpen(false);
    } catch (error) {
      const errorMessage = "Content delete failed.";
      showToast(errorMessage, "error");
    }
  };

  const handlePreview = (): void => {
    window.open(content, "_blank");
    setModalOpen(false);
  };

  const handleTogglePublic = async (): Promise<void> => {
    try {
      await axios.post("api/v1/update-status", {
        id: cardId,
        isPublic: !isPublic,
      });

      const toastMessage = "Content toggled successfully!";
      showToast(toastMessage, "success");
      setModalOpen(false);
    } catch (error) {
      const errorMessage = "Content toggle failed.";
      showToast(errorMessage, "error");
    }
  };

  return (
    <Modal
      className="bg-accent/90 w-full max-w-sm rounded-3xl p-6"
      isOpen
      onClose={() => {
        setModalOpen(false);
      }}
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
            <span className="text-text ml-2">
              {isPublic ? "This card is public" : "This card is private"}
            </span>
          </div>
          <Button
            className="text-text flex items-center rounded p-2 text-base hover:bg-gray-100"
            icon={
              isPublic ? <Lock className="mr-2" /> : <Globe className="mr-2" />
            }
            onClick={handleTogglePublic}
            text={isPublic ? "Make Private" : "Make Public"}
            type="button"
            variant="ghost"
          />

          <Button
            className="text-text flex items-center rounded p-2 text-base hover:bg-gray-100"
            icon={<Eye className="mr-2" />}
            onClick={handlePreview}
            text="Preview"
            type="button"
            variant="ghost"
          />

          <Button
            className="flex items-center rounded p-2 text-base text-red-600 hover:bg-red-100"
            icon={<Trash2 className="mr-2" />}
            onClick={handleDelete}
            text="Delete"
            type="button"
            variant="ghost"
          />
        </div>
      </Modal.Content>
      <Modal.Footer>
        <Button
          className="w-full rounded bg-red-200 py-2 text-red-700 hover:bg-red-500"
          onClick={() => {
            setModalOpen(false);
          }}
          text="Close"
          type="button"
          variant="outline"
        />
      </Modal.Footer>
    </Modal>
  );
}
