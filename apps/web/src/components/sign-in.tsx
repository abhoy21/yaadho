"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

import { Button } from "@repo/ui/button"; // Import the custom Button component
import Input from "@repo/ui/input";
import { Modal } from "@repo/ui/modal";
import { Eye, EyeOff } from "lucide-react";
import { createPortal } from "react-dom";
import { ToastType } from "../../hooks/useToast";
import { signinSchema } from "../../lib/zod-schema";
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
}: SigninProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const signInFormRef = useRef<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = signinSchema.safeParse(signInFormRef.current);

    if (!validation.success) {
      validation.error.errors.forEach((error) =>
        showToast(error.message, "error"),
      );
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
      setIsOpen(false);
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.error(error);
      showToast("Sign in failed.", "error");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/dashboard", redirect: true });
    } catch (error) {
      console.error(error);
      showToast("Sign in failed.", "error");
    }
  };

  const handleGithubSignIn = async () => {
    try {
      await signIn("github", { callbackUrl: "/dashboard", redirect: true });
    } catch (error) {
      console.error(error);
      showToast("Sign in failed.", "error");
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999]">
      <div
        className="fixed inset-0 bg-black/25 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      <Modal
        isOpen={true}
        onClose={() => setIsOpen(false)}
        className="w-full max-w-md p-4"
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
          <form onSubmit={handleSignin} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => (signInFormRef.current.email = e.target.value)}
            />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              showIcon={true}
              onTogglePasswordVisibility={() => setShowPassword(!showPassword)}
              onChange={(e) =>
                (signInFormRef.current.password = e.target.value)
              }
              Icon={<Eye size={20} className="text-primary" />}
              IconOff={<EyeOff size={20} className="text-secondary" />}
            />

            <Button
              type="submit"
              variant="primary"
              text="Sign In"
              size="lg"
              className="hover:bg-secondary w-full py-3 font-semibold transition-colors duration-300 ease-in-out"
            />
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
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

          <p className="mt-6 text-center text-sm text-gray-600 md:text-lg">
            Don't have an account?{" "}
            <button
              onClick={() => setAuthMode("Signup")}
              className="text-secondary hover:text-accent font-medium"
            >
              Sign up
            </button>
          </p>
        </Modal.Content>
      </Modal>
    </div>,
    document.body,
  );
}
