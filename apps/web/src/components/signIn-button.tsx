"use client";
import { Button } from "@repo/ui/button";
import { useState } from "react";
import { useToast } from "../../hooks/useToast";
import SigninModal from "./sign-in";

export const SignInButton = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <SigninModal
          setIsOpen={setIsOpen}
          showToast={showToast}
          ToastContainer={ToastContainer}
        />
      )}
    </>
  );
};
