import {
  ArrowDown,
  BarChart3,
  Clock,
  DraftingCompass,
  MousePointerClick,
  User,
} from "lucide-react";
import Image from "next/image";

export default function Features() {
  return (
    <div className="my-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="my-16 text-center">
          <h3 className="text-md shadow-secondary/45 mx-auto w-48 rounded-full bg-transparent px-4 py-2 font-medium tracking-widest text-gray-500 shadow-md ">
            SOLUTIONS
          </h3>
          <h1 className="my-6 text-4xl font-bold tracking-wide text-gray-900">
            Unlock Your Full Potential <br /> with Your Digital Second Brain.
          </h1>
        </div>

        {/* Features */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-gray-100 bg-white px-4 py-8 shadow-sm">
            <div className="mb-4 inline-flex items-center justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50">
                <User className="h-6 w-6 text-orange-500" />
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Effortlessly sync and organize links, notes, and ideas in one
              place for quick access and better decision-making.
            </p>
          </div>

          <div className="rounded-lg border border-gray-100 bg-white px-4 py-8 shadow-sm">
            <div className="mb-4 inline-flex items-center justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                <BarChart3 className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Categorize and prioritize your saved content to stay focused and
              boost productivity.
            </p>
          </div>

          <div className="rounded-lg border border-gray-100 bg-white px-4 py-8 shadow-sm">
            <div className="mb-4 inline-flex items-center justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50">
                <Clock className="h-5 w-5 text-purple-500" />
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Gain actionable insights and track progress visually to stay ahead
              of your goals.
            </p>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="relative">
          <div className=" mb-16 max-h-[575px] overflow-hidden rounded-2xl">
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%",
              }}
            >
              <Image
                src="/dashboard_preview.png"
                alt="Dashboard Preview"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/100" />
            <div className="absolute bottom-32 left-[10px] z-10 md:bottom-40 md:left-14">
              <div className="flex h-14 w-14 -rotate-12 transform items-center justify-center rounded-xl bg-cyan-50 shadow-lg md:h-28 md:w-28">
                <MousePointerClick className="h-8 w-8 text-cyan-500 md:h-16 md:w-16" />
              </div>
            </div>
            <div className="absolute right-[8px] top-32 md:right-8 md:top-40">
              <div className="flex h-14 w-14 rotate-6 transform items-center justify-center rounded-xl bg-green-50 shadow-lg md:h-28 md:w-28">
                <DraftingCompass className="h-8 w-8 text-green-500 md:h-16 md:w-16" />
              </div>
            </div>
          </div>
        </div>

        {/* bento grid */}
        <div className="mb-16 text-center">
          <h3 className="mb-4 text-2xl font-bold tracking-wider">
            Centralized Knowledge Hub
          </h3>
          <p className="mb-16 text-gray-500">
            Say goodbye to scattered bookmarks and endless tabs—store everything
            in a simple, intuitive system.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
            <div className="relative col-span-1 max-h-[370px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md sm:col-span-2 lg:col-span-3">
              <Image
                src="/dashboard_preview.png"
                alt="dashboard"
                fill
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-start bg-black bg-opacity-50 p-6 text-white">
                <h4 className="mb-2 text-2xl font-semibold">
                  Collaborate and Share Effortlessly
                </h4>
                <p className="text-lg text-gray-300">
                  Share links, notes, and insights with your team to streamline
                  collaboration and enhance productivity.
                </p>
              </div>
            </div>

            <div className="relative col-span-1 max-h-[370px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
              <Image
                src="/dashboard_preview2.png"
                alt="dashboard"
                width={1920}
                height={1080}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-start bg-black bg-opacity-50 p-6 text-white">
                <h4 className="mb-2 text-2xl font-semibold">
                  Intelligent Content Management
                </h4>
                <p className="text-lg text-gray-300">
                  Organize your saved links and notes effectively, set reminders
                  to revisit important resources, and stay on top of your
                  knowledge goals with smart tools.
                </p>
              </div>
            </div>

            <div className="relative col-span-1 max-h-[370px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
              <Image
                src="/dashboard_preview3.png"
                alt="dashboard"
                width={1920}
                height={1080}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-start bg-black bg-opacity-50 p-6 text-white">
                <h4 className="mb-2 text-2xl font-semibold">
                  Advanced Organization Features
                </h4>
                <p className="text-lg text-gray-300">
                  Use tags and filters to structure your saved content for easy
                  retrieval and better organization.
                </p>
              </div>
            </div>

            <div className="relative col-span-1 max-h-[370px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md sm:col-span-2 lg:col-span-3">
              <Image
                src="/dashboard_preview4.png"
                alt="dashboard"
                width={1920}
                height={1080}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-start bg-black bg-opacity-50 p-6 text-white">
                <h4 className="mb-2 text-2xl font-semibold">
                  Real-Time Updates
                </h4>
                <p className="text-lg text-gray-300">
                  Keep all your notes and links up to date with automatic
                  syncing across your devices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-lg font-semibold tracking-widest text-gray-700">
          And a lot More...
          <ArrowDown className="ml-2 inline-block h-6 w-6 text-gray-700" />
        </p>
      </div>
    </div>
  );
}
