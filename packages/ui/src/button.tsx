import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
}

function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  icon,
}: ButtonProps): JSX.Element {
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/75",
    secondary: "bg-secondary text-black hover:bg-secondary/75",
    accent: "bg-accent text-white hover:bg-accent/75",
  };

  const sizeStyles = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantStyles[variant]} ${sizeStyles[size]} ${
        fullWidth ? "w-full" : "w-auto"
      } inline-flex items-center justify-center rounded-lg font-montserrat font-medium shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${variant}/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 active:translate-y-0`}
    >
      {icon && <span className='mr-2 ml-1'>{icon}</span>}
      {label}
    </button>
  );
}

export default Button;
