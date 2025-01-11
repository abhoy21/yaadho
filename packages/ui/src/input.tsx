import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

type CustomInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

interface InputProps extends CustomInputProps {
  label?: string;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  error?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      variant = "primary",
      size = "md",
      error,
      fullWidth = false,
      icon,
      className = "",
      ...props
    },
    ref,
  ) => {
    const variantStyles = {
      primary: "bg-primary focus:border-secondary/75 focus:ring-secondary/20",
      secondary: "bg-secondary focus:border-primary/75 focus:ring-primary/20",
      accent: "border-accent focus:border-accent/75 focus:ring-accent/20",
    };

    const sizeStyles = {
      sm: "text-sm px-4 py-2",
      md: "text-base px-6 py-3",
      lg: "text-lg px-8 py-4",
    };

    return (
      <div className={`#{fullWidth ? "w-full" : "w-auto"}`}>
        {label && (
          <label className='block text-sm font-montserrat font-medium mb-2'>
            {label}
          </label>
        )}

        <div className='relative'>
          {icon && (
            <span className='absolute left-3 top-1/2 -translate-y-1/2'>
              {icon}
            </span>
          )}

          <input
            className={`  ${variantStyles[variant]}
              ${sizeStyles[size]}
              ${icon ? "pl-10" : ""}
              ${fullWidth ? "w-full" : "w-auto"}
              ${error ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}
              ${className} rounded-lg  
              border
              font-montserrat
              bg-background
              shadow-sm
              transition-all
              duration-200
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              disabled:opacity-50
              disabled:cursor-not-allowed
            `}
            {...props}
          />
        </div>
        {error && (
          <p className='mt-1 text-sm text-red-500 font-montserrat'>{error}</p>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export default Input;
