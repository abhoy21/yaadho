// modal.tsx
"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";

// Types
interface ModalContextType {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

interface ModalHeaderProps {
  children: React.ReactNode;
  className?: string;
  showClose?: boolean;
}

interface ModalContentProps {
  children: React.ReactNode;
  className?: string;
}

interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

interface ModalTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface ModalDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

// Context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Hook
function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a Modal");
  }
  return context;
}

// Components
function ModalRoot({
  children,
  isOpen,
  onClose,
  className = "",
}: ModalProps): JSX.Element | null {
  const handleEscape = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <ModalContext.Provider value={{ isOpen, onClose }}>
      <div
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        role="dialog"
      >
        <div
          className={`relative w-full max-w-lg transform rounded-lg bg-white p-6 shadow-xl transition-all ${className}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
          role="document"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
}

function ModalHeader({
  children,
  className = "",
  showClose = true,
}: ModalHeaderProps): JSX.Element {
  const { onClose } = useModal();

  return (
    <div className={`mb-4 flex items-start justify-between ${className}`}>
      <div className="flex-1">{children}</div>
      {showClose ? (
        <button
          aria-label="Close modal"
          className="ml-4 inline-flex items-center rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900"
          onClick={onClose}
          type="button"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </button>
      ) : null}
    </div>
  );
}

function ModalContent({
  children,
  className = "",
}: ModalContentProps): JSX.Element {
  return <div className={`relative flex-1 ${className}`}>{children}</div>;
}

function ModalFooter({
  children,
  className = "",
}: ModalFooterProps): JSX.Element {
  return (
    <div
      className={`mt-6 flex items-center justify-end space-x-4 ${className}`}
    >
      {children}
    </div>
  );
}

function ModalTitle({
  children,
  className = "",
}: ModalTitleProps): JSX.Element {
  return (
    <h3
      className={`text-lg font-semibold leading-6 text-gray-900 ${className}`}
    >
      {children}
    </h3>
  );
}

function ModalDescription({
  children,
  className = "",
}: ModalDescriptionProps): JSX.Element {
  return (
    <div className={`mt-2 text-sm text-gray-500 ${className}`}>{children}</div>
  );
}

// Compose Modal object
export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
  Title: ModalTitle,
  Description: ModalDescription,
});
