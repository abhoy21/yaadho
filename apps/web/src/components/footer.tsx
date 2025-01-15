import { Calendar, ChevronRight, Clock, Flag, HelpCircle } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="net-pattern mx-4 mt-8 rounded-xl pb-8 pt-12 md:mx-24 md:pb-12 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-12">
          {/* Brand and Tagline Section */}
          <div className="col-span-1 md:col-span-4">
            <Logo />
            <h3 className="mb-6 text-2xl font-bold tracking-wider md:mb-8 md:text-3xl">
              Stay organized and
              <br className="hidden md:block" />
              boost your productivity
            </h3>
          </div>

          {/* Links Section */}
          <div className="col-span-1 md:col-span-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {/* Company Links */}
              <div>
                <h4 className="mb-4 font-medium">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-sm text-gray-500 hover:text-gray-900"
                      href="#"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-gray-500 hover:text-gray-900"
                      href="#"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-gray-500 hover:text-gray-900"
                      href="#"
                    >
                      What&apos;s New
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-gray-500 hover:text-gray-900"
                      href="#"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Product Links */}
              <div>
                <h4 className="mb-4 font-medium">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-sm text-gray-500 hover:text-gray-900"
                      href="#"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-gray-500 hover:text-gray-900"
                      href="#"
                    >
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-gray-500 hover:text-gray-900"
                      href="#"
                    >
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-gray-500 hover:text-gray-900"
                      href="#"
                    >
                      Price
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Icons Grid Section */}
        <div className="relative hidden md:block">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 md:gap-8">
            <div className="rounded-xl bg-rose-50 p-4 shadow-sm">
              <HelpCircle className="h-5 w-5 text-rose-500 md:h-6 md:w-6" />
            </div>
            <div className="rounded-xl bg-fuchsia-50 p-4 shadow-sm">
              <div className="text-xl font-bold text-fuchsia-500 md:text-2xl">
                20
              </div>
            </div>
            <div className="rounded-xl bg-blue-50 p-4 shadow-sm">
              <Flag className="h-5 w-5 text-blue-500 md:h-6 md:w-6" />
            </div>
            <div className="rounded-xl bg-emerald-50 p-4 shadow-sm">
              <Clock className="h-5 w-5 text-emerald-500 md:h-6 md:w-6" />
            </div>
            <div className="rounded-xl bg-orange-50 p-4 shadow-sm">
              <Calendar className="h-5 w-5 text-orange-500 md:h-6 md:w-6" />
            </div>
            <div className="rounded-xl bg-violet-50 p-4 shadow-sm">
              <ChevronRight className="h-5 w-5 text-violet-500 md:h-6 md:w-6" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:mt-12 md:flex-row md:gap-0">
          <p className="text-sm text-gray-500">© 2024. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <Link
              className="text-sm text-gray-500 hover:text-gray-900"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm text-gray-500 hover:text-gray-900"
              href="#"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
