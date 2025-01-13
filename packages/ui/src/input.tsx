/* eslint-disable react/function-component-definition */
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  showPasswordToggle?: boolean;
  onTogglePasswordVisibility?: () => void;
  Icon?: React.ReactNode; // Icon when password is visible
  IconOff?: React.ReactNode; // Icon when password is hidden
}

const Input: React.FC<InputProps> = ({
  error,
  showPasswordToggle,
  onTogglePasswordVisibility,
  Icon,
  IconOff,
  ...props
}) => {
  return (
    <div className="relative">
      <input
        {...props}
        className={`w-full rounded-xl border ${
          error ? "border-red-500" : "border-gray-200"
        } bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200`}
      />
      {showPasswordToggle ? (
        <button
          className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center text-gray-500 hover:text-gray-700"
          onClick={onTogglePasswordVisibility}
          type="button"
        >
          {props.type === "password" && IconOff ? IconOff : Icon}
        </button>
      ) : null}
      {error ? <p className="mt-1 text-sm text-red-500">{error}</p> : null}
    </div>
  );
};

export default Input;
