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
              showPasswordToggle
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

          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={handleGoogleSignIn}
              variant="outline"
              text={
                <>
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </>
              }
            />

            <Button
              onClick={handleGithubSignIn}
              variant="outline"
              text={
                <>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="black">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                    />
                  </svg>
                  GitHub
                </>
              }
            />
          </div>

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
