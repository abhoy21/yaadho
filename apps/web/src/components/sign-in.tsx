"use client";
import { Button } from "@repo/ui/button"; // Import the custom Button component
import Input from "@repo/ui/input";
import { Modal } from "@repo/ui/modal";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { ChangeEvent } from "react";
import React, { useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ToastType } from "../../hooks/use-toast";
import { signinSchema } from "../lib/zod-schema";
import Logo from "./logo";
import { SocialLogins } from "./social-logins";

interface SigninProps {
  setIsOpen: (value: boolean) => void;
  showToast: (message: string, type: ToastType) => void;
  ToastContainer: () => React.ReactElement;
  setAuthMode: (value: string) => void;
}

export default function SigninModal({
  setIsOpen,
  showToast,
  ToastContainer,
  setAuthMode,
}: SigninProps): React.JSX.Element {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const signInFormRef = useRef<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleFormSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const validation = signinSchema.safeParse(signInFormRef.current);

      if (!validation.success) {
        validation.error.errors.forEach((error) => {
          showToast(error.message, "error");
        });
        return;
      }

      try {
        const response = await signIn("credentials", {
          email: validation.data.email,
          password: validation.data.password,
          redirect: false,
          callbackUrl: "/dashboard",
        });

        if (response?.error) {
          showToast(response.error, "error");
          return;
        }
        showToast("Signed in successfully!", "success");
        handleClose();
        router.push("/dashboard");
        router.refresh();
      } catch (error) {
        showToast("Sign in failed.", "error");
      }
    },
    [router, showToast, handleClose],
  );

  const handleGoogleSignIn = useCallback(() => {
    void signIn("google", { callbackUrl: "/dashboard", redirect: true });
  }, []);

  const handleGithubSignIn = useCallback(() => {
    void signIn("github", { callbackUrl: "/dashboard", redirect: true });
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[9999]">
      <div
        aria-label="Close modal"
        className="fixed inset-0 bg-black/25 backdrop-blur-sm"
        onKeyDown={(e) => {
          e.key === "Enter" && handleClose();
        }}
        role="button"
        tabIndex={0}
      />
      <Modal
        className="w-full max-w-md p-4"
        isOpen
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Modal.Header>
          <Logo />
        </Modal.Header>
        <Modal.Title>Sign In</Modal.Title>
        <Modal.Description className="mb-4">
          Get back your Second Brain now!
        </Modal.Description>

        <Modal.Content>
          <ToastContainer />
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                (signInFormRef.current.email = e.target.value)
              }
              placeholder="Email"
              type="email"
            />
            <Input
              Icon={<Eye className="text-primary" size={20} />}
              IconOff={<EyeOff className="text-secondary" size={20} />}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                (signInFormRef.current.password = e.target.value)
              }
              onTogglePasswordVisibility={() => {
                setShowPassword(!showPassword);
              }}
              placeholder="Password"
              showIcon
              type={showPassword ? "text" : "password"}
            />

            <Button
              className="hover:bg-secondary w-full py-3 font-semibold transition-colors duration-300 ease-in-out"
              size="lg"
              text="Sign In"
              type="submit"
              variant="primary"
            />
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                or Continue with
              </span>
            </div>
          </div>

          <SocialLogins
            handleGithubSignIn={handleGithubSignIn}
            handleGoogleSignIn={handleGoogleSignIn}
          />

          <p className="mt-6 flex items-center justify-center text-center text-sm text-gray-600 md:text-lg">
            <span> Don&apos;t have an account? </span>
            <Button
              className="text-secondary hover:text-accent font-medium"
              onClick={() => {
                setAuthMode("Signup");
              }}
              text="Sign up"
              variant="ghost"
            />
          </p>
        </Modal.Content>
      </Modal>
    </div>,
    document.body,
  );
}
