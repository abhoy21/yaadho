"use client";
import { Button } from "@repo/ui/button";
import { useState } from "react";
import { useToast } from "../../hooks/useToast";
import SigninModal from "./sign-in";
import SignupModal from "./sign-up";

export const SignInButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"Signup" | "Signin">("Signin");

  const { showToast, ToastContainer } = useToast();

  return (
    <>
      <Button
        variant="primary"
        size="md"
        text="Sign In"
        className="hover:bg-secondary"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <>
          {authMode === "Signin" ? (
            <SigninModal
              setIsOpen={setIsOpen}
              showToast={showToast}
              ToastContainer={ToastContainer}
              setAuthMode={() => setAuthMode("Signup")}
            />
          ) : (
            <SignupModal
              setIsOpen={setIsOpen}
              showToast={showToast}
              ToastContainer={ToastContainer}
              setAuthMode={() => setAuthMode("Signup")}
            />
          )}
        </>
      )}
    </>
  );
};
