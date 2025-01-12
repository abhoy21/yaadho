import { Button } from "@repo/ui/button";
import Link from "next/link";
import Logo from "./logo";
import { SignInButton } from "./signIn-button";

export default function Navbar() {
  return (
    <nav className="sticky left-0 right-0 top-0 z-50 mx-auto max-w-7xl rounded-lg bg-white/30 px-4 shadow-md backdrop-blur-md sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <Logo />

        <div className="hidden items-center space-x-8 md:flex">
          <Link
            href="/home"
            className="text-sm text-black duration-300 ease-in-out hover:text-gray-700"
          >
            Features
          </Link>
          <Link
            href="/home"
            className="text-sm text-black duration-300 ease-in-out hover:text-gray-700"
          >
            Solutions
          </Link>
          <Link
            href="/home"
            className="text-sm text-black duration-300 ease-in-out hover:text-gray-700"
          >
            Pricing
          </Link>
          <Link
            href="/home"
            className="text-sm text-black duration-300 ease-in-out hover:text-gray-700"
          >
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <SignInButton />

          <Button
            variant="outline"
            size="md"
            text="Get Demo"
            className="hover:bg-primary/45"
          />
        </div>
      </div>
    </nav>
  );
}
