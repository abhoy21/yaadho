import Input from "@repo/ui/input";
import { Modal } from "@repo/ui/modal";
import type { AxiosResponse } from "axios";
import axios from "axios";
import { MessageCircle, Send } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface AiModalProps {
  setAiModal: (value: boolean) => void;
}

interface Message {
  role: string;
  content: string;
}

const formatAIContent = (content: string): React.ReactNode => {
  if (content.includes("**")) {
    const parts = content.split(/\*\*(?<content>.*?)\*\*/);

    return parts.map((part: string, index: number) => {
      if (index % 2 === 1) {
        return (
          <div className="mb-4" key={index}>
            <h2 className="mb-2 text-2xl font-bold">{part}</h2>
          </div>
        );
      }
      return part.split("\n").map(
        (line: string, lineIndex: number) =>
          line.trim() && (
            <p
              className="mb-3 text-base leading-relaxed"
              key={`${index}-${lineIndex}`}
            >
              {line}
            </p>
          ),
      );
    });
  }
  return <p className="text-base leading-relaxed">{content}</p>;
};

export default function AiModal({
  setAiModal,
}: AiModalProps): React.JSX.Element {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm here to help you with any questions or information you need. How can I assist you today?",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messageEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleAiMessage = useCallback(async () => {
    if (!inputValue.trim() || loading) return;
    try {
      setLoading(true);
      const userMessage = inputValue;
      setInputValue("");
      const newUserMessage: Message = {
        role: "user",
        content: userMessage,
      };

      setMessages((prev) => [...prev, newUserMessage]);

      const response: AxiosResponse<{ response: string }> = await axios.post(
        "/api/gpt-ai",
        {
          userQuery: userMessage,
        },
      );

      if (response.data.response) {
        const newAiMessage: Message = {
          role: "assistant",
          content: response.data.response,
        };

        setMessages((prev) => [...prev, newAiMessage]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error processing your request.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [inputValue, loading]);

  return (
    <Modal
      className="font-montserrat max-w-5xl rounded-3xl"
      isOpen
      onClose={() => {
        setAiModal(false);
      }}
    >
      <Modal.Header
        className="border-primary/20 from-primary/20 to-secondary/20 rounded-t-3xl border-b bg-gradient-to-r p-4"
        showClose
      >
        <div className="flex items-center gap-2">
          <MessageCircle className="text-backround h-6 w-6" />
          <Modal.Title className="text-text text-xl font-semibold">
            AI Assistant
          </Modal.Title>
        </div>
      </Modal.Header>

      <Modal.Content className="bg-secondary/10 hide-scrollbar flex h-[60vh] max-h-[90vh] flex-col overflow-y-auto rounded-3xl p-6 backdrop-blur-md">
        <div className="space-y-6">
          {messages.map((message, index) => (
            <div
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              key={index}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-6 py-4 shadow-lg transition-all duration-200 hover:shadow-xl ${
                  message.role === "user"
                    ? "bg-primary text-white"
                    : "bg-secondary/10 text-text"
                }`}
              >
                {message.role === "user" ? (
                  <p className="text-sm leading-relaxed md:text-base">
                    {message.content}
                  </p>
                ) : (
                  <div className="space-y-2">
                    {formatAIContent(message.content)}
                  </div>
                )}
              </div>
            </div>
          ))}
          {loading ? (
            <div className="flex justify-start">
              <div className="bg-secondary/5 max-w-[80%] rounded-2xl px-6 py-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="bg-secondary h-2 w-2  animate-[bounce_1s_infinite] rounded-full " />
                  <div className="bg-primary h-2 w-2 animate-[bounce_1s_infinite_.2s] rounded-full " />
                  <div className="bg-secondary h-2 w-2  animate-[bounce_1s_infinite_.4s] rounded-full " />
                </div>
              </div>
            </div>
          ) : null}
          <div ref={messageEndRef} />
        </div>
      </Modal.Content>

      <Modal.Footer className="border-primary/20 from-primary/20 to-secondary/20 rounded-b-3xl border-b bg-gradient-to-r p-4">
        <div className="w-full">
          <Input
            Icon={
              <Send
                className={`h-5 w-5 transition-all duration-200 ${
                  loading
                    ? "text-primary/40"
                    : "text-primary hover:text-accent cursor-pointer hover:scale-110"
                }`}
                onClick={handleAiMessage}
              />
            }
            className="py-2 text-lg shadow-lg transition-all duration-200 focus-within:shadow-xl md:py-6"
            disabled={loading}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyDown={async (e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                await handleAiMessage();
              }
            }}
            placeholder="Type your message..."
            type="text"
            value={inputValue}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
}
