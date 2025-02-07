"use client";
import { Button } from "@repo/ui/button";
import { useState } from "react";
import { useToast } from "../../hooks/use-toast";
import SigninModal from "./sign-in";
import SignupModal from "./sign-up";

export function SignInButton(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"Signup" | "Signin">("Signin");

  const { showToast, ToastContainer } = useToast();

  return (
    <>
      <Button
        className="hover:bg-secondary"
        onClick={() => {
          setIsOpen(true);
        }}
        size="md"
        text="Sign In"
        variant="primary"
      />

      {isOpen ? (
        <>
          {authMode === "Signin" ? (
            <SigninModal
              ToastContainer={ToastContainer}
              setAuthMode={() => {
                setAuthMode("Signup");
              }}
              setIsOpen={setIsOpen}
              showToast={showToast}
            />
          ) : (
            <SignupModal
              ToastContainer={ToastContainer}
              setAuthMode={() => {
                setAuthMode("Signin");
              }}
              setIsOpen={setIsOpen}
              showToast={showToast}
            />
          )}
        </>
      ) : null}
    </>
  );
}
