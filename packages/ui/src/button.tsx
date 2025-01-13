"use client";
import type { ReactNode } from "react";

type Variants = "primary" | "secondary" | "outline" | "danger" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variants;
  size?: ButtonSize;
  text?: ReactNode | string;
  loading?: boolean;
  icon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  text,
  className = "",
  loading = false,
  disabled,
  icon,
  rightIcon,
  children,
  ...props
}: ButtonProps): JSX.Element {
  const baseStyles =
    "rounded-lg transition-all duration-200 flex items-center justify-center gap-2";

  const variantStyles: Record<Variants, string> = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    outline: "border-2 border-primary text-primary",
    danger: "bg-danger text-white",
    ghost: "text-gray-500 hover:text-gray-700 bg-transparent",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "text-sm px-3 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-8 py-2",
    icon: "p-1",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none";

  const loadingSpinner = (
    <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled || loading ? disabledStyles : ""} ${className}`}
      disabled={disabled || loading}
      type={props.onClick ? "button" : "submit"}
      {...props}
    >
      {loading ? (
        loadingSpinner
      ) : (
        <>
          {icon ? <span className="flex items-center">{icon}</span> : null}
          {text || children}
          {rightIcon ? (
            <span className="flex items-center">{rightIcon}</span>
          ) : null}
        </>
      )}
    </button>
  );
}
