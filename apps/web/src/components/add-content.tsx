"use client";

import { Button } from "@repo/ui/button"; // Importing the custom Button component
import Input from "@repo/ui/input"; // Importing the prebuilt Input component
import { Modal } from "@repo/ui/modal"; // Importing the prebuilt Modal component
import axios from "axios";
import { Globe, Lock, X } from "lucide-react";
import { useState } from "react";
import { useToast } from "../../hooks/useToast";
import { addContentSchema } from "../../lib/zod-schema";

enum ContentType {
  link = "link",
  text = "text",
}

interface ContentData {
  title: string;
  type: ContentType;
  content: string;
  tags: string[];
  isPublic: boolean;
}

export default function AddContent({
  setIsModalOpen,
}: {
  setIsModalOpen: (value: boolean) => void;
}) {
  const { showToast, ToastContainer } = useToast();
  const [activeTab, setActiveTab] = useState<ContentType>(ContentType.link);
  const [inputTags, setInputTags] = useState<string>("");
  const [contentData, setContentData] = useState<ContentData>({
    title: "",
    type: ContentType.link,
    content: "",
    tags: [],
    isPublic: true,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleTagNext = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab" || e.key === "Enter") {
      e.preventDefault();
      if (inputTags.trim()) {
        setContentData({
          ...contentData,
          tags: [...contentData.tags, inputTags.trim()],
        });
        setInputTags("");
      }
    } else if (
      e.key === "Backspace" &&
      !inputTags &&
      contentData.tags.length > 0
    ) {
      setContentData({
        ...contentData,
        tags: contentData.tags.slice(0, -1),
      });
    }
  };

  const handleRemoveTag = (index: number) => {
    setContentData({
      ...contentData,
      tags: contentData.tags.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const validation = addContentSchema.safeParse(contentData);

    if (!validation.success) {
      validation.error.errors.forEach((error) =>
        showToast(error.message, "error"),
      );
      return;
    }

    try {
      const response = await axios.post("/api/v1/create-content", contentData);
      showToast(
        response.data.message || "Content added successfully!",
        "success",
      );
      setIsModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
      showToast("Content add failed.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999]">
      <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
      <Modal
        isOpen={true}
        onClose={() => setIsModalOpen(false)}
        className="w-full max-w-md p-6 md:max-w-lg"
      >
        <ToastContainer />
        <Modal.Header>
          <h1 className="text-text text-2xl font-semibold">Add New Content</h1>
        </Modal.Header>
        <Modal.Description>
          <p className="text-text mb-4 text-base">
            Choose the type of content and provide details.
          </p>
        </Modal.Description>

        <div className="mb-4 flex justify-center gap-4">
          {Object.values(ContentType).map((type) => (
            <Button
              key={type}
              text={type.charAt(0).toUpperCase() + type.slice(1)}
              className={`rounded-lg px-4 py-2 text-sm font-medium ${
                activeTab === type
                  ? "bg-primary text-background"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => {
                setActiveTab(type);
                setContentData({ ...contentData, type, content: "" });
              }}
            />
          ))}
        </div>

        <Modal.Content>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              type="text"
              value={contentData.title}
              onChange={(e) =>
                setContentData({ ...contentData, title: e.target.value })
              }
              placeholder="Title"
            />

            {activeTab === ContentType.link && (
              <Input
                type="url"
                value={contentData.content}
                onChange={(e) =>
                  setContentData({ ...contentData, content: e.target.value })
                }
                placeholder="Enter a link"
              />
            )}

            {activeTab === ContentType.text && (
              <textarea
                value={contentData.content}
                onChange={(e) =>
                  setContentData({ ...contentData, content: e.target.value })
                }
                placeholder="Write your note here..."
                className="focus:primary w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:ring-2 focus:ring-blue-200"
              />
            )}

            <Input
              type="text"
              value={inputTags}
              onChange={(e) => setInputTags(e.target.value)}
              onKeyDown={handleTagNext}
              placeholder="Type and press Enter to add tags..."
            />

            <div className="flex flex-wrap gap-2">
              {contentData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-accent bg-secondary/20 flex items-center gap-1 rounded-md px-2 py-1 text-sm backdrop-blur-md"
                >
                  {tag}
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<X className="h-4 w-4" />}
                    className="text-red-500 hover:text-red-800"
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveTag(index);
                    }}
                  />
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {contentData.isPublic ? (
                  <Globe className="text-primary h-5 w-5" />
                ) : (
                  <Lock className="text-danger h-5 w-5" />
                )}
                <span className="mt-2">
                  {contentData.isPublic ? "Public" : "Private"}
                </span>
              </div>
              <button
                type="button"
                onClick={() =>
                  setContentData({
                    ...contentData,
                    isPublic: !contentData.isPublic,
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                  contentData.isPublic ? "bg-primary" : "bg-red-600"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    contentData.isPublic ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Button
                type="button"
                onClick={() => setIsModalOpen(false)}
                variant="danger"
                className="hover:bg-danger w-full bg-red-300 py-3 font-semibold transition-colors duration-300 ease-in-out"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                variant="primary"
                className={`w-full py-3 font-semibold transition-colors duration-300 ease-in-out ${
                  loading ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                {loading ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </Modal.Content>
      </Modal>
    </div>
  );
}
