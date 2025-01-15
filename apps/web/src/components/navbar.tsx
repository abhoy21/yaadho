import { Button } from "@repo/ui/button";
import Link from "next/link";
import Logo from "./logo";
import { SignInButton } from "./sign-in-button";

export default function Navbar(): React.JSX.Element {
  return (
    <nav className="sticky left-0 right-0 top-0 z-50 mx-auto max-w-7xl rounded-lg bg-white/30 px-4 shadow-md backdrop-blur-md sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <Logo />

        <div className="hidden items-center space-x-8 md:flex">
          <Link
            className="text-sm text-black duration-300 ease-in-out hover:text-gray-700"
            href="/home"
          >
            Features
          </Link>
          <Link
            className="text-sm text-black duration-300 ease-in-out hover:text-gray-700"
            href="/home"
          >
            Solutions
          </Link>
          <Link
            className="text-sm text-black duration-300 ease-in-out hover:text-gray-700"
            href="/home"
          >
            Pricing
          </Link>
          <Link
            className="text-sm text-black duration-300 ease-in-out hover:text-gray-700"
            href="/home"
          >
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <SignInButton />

          <Button
            className="hover:bg-primary/45"
            size="md"
            text="Get Demo"
            variant="outline"
          />
        </div>
      </div>
    </nav>
  );
}
