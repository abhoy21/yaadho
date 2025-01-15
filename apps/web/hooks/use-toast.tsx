import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";
import { createElement, useCallback, useState } from "react";
import { cn } from "../utils/cn";

export type ToastType = "success" | "error" | "info" | "warning";

interface UseToastType {
  showToast: (message: string, type: ToastType) => void;
  ToastContainer: () => React.JSX.Element;
}

interface ToastState {
  message: string;
  type: ToastType;
  id: number;
}

const icons = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
  warning: AlertTriangle,
};

const toastStyles = {
  success: "bg-green-50 text-green-800 border-green-200",
  error: "bg-red-50 text-red-800 border-red-200",
  info: "bg-blue-50 text-blue-800 border-blue-200",
  warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
};

const iconStyles = {
  success: "text-green-600",
  error: "text-red-600",
  info: "text-blue-600",
  warning: "text-yellow-600",
};

export const useToast = (): UseToastType => {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const removeToast = useCallback((id: number): void => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType): void => {
      const id = Date.now();
      setToasts((prev) => [...prev, { message, type, id }]);

      setTimeout(() => {
        removeToast(id);
      }, 5000);
    },
    [removeToast],
  );
  function ToastContainer(): React.JSX.Element {
    return (
      <>
        {toasts.map(({ message, type, id }) => (
          <div
            className={cn(
              "animate-slide-in fixed right-4 top-4 z-[9999] flex transform items-center gap-2 rounded-lg border px-4 py-3 shadow-lg transition-all duration-500 ease-in-out",
              toastStyles[type],
            )}
            key={id}
            role="alert"
          >
            {createElement(icons[type], {
              className: cn("w-5 h-5 md:w-12 md:h-12", iconStyles[type]),
            })}
            <p className="text-sm font-medium md:text-lg">{message}</p>
          </div>
        ))}
      </>
    );
  }

  return {
    showToast,
    ToastContainer,
  };
};
