import {
  ArrowDown,
  BarChart3,
  Clock,
  DraftingCompass,
  MousePointerClick,
  User,
} from "lucide-react";
import Image from "next/image";

export default function Features(): React.JSX.Element {
  return (
    <div className="my-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="animate-fade-in-up my-16 text-center">
          <h3 className="text-md shadow-secondary/45 mx-auto w-48 rounded-full bg-transparent px-4 py-2 font-medium tracking-widest text-gray-500 shadow-md">
            SOLUTIONS
          </h3>
          <h1 className="my-6 text-4xl font-bold tracking-wide text-gray-900">
            Unlock Your Full Potential <br /> with Your Digital Second Brain.
          </h1>
        </div>

        {/* Features */}
        <div className="animate-fade-in-up mb-16 grid grid-cols-1 gap-8 delay-100 md:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 inline-flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50">
                <User className="h-6 w-6 text-orange-500" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              Personalized Organization
            </h3>
            <p className="text-gray-600">
              Effortlessly sync and organize links, notes, and ideas in one
              place for quick access and better decision-making.
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 inline-flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <BarChart3 className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              Smart Prioritization
            </h3>
            <p className="text-gray-600">
              Categorize and prioritize your saved content to stay focused and
              boost productivity.
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 inline-flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50">
                <Clock className="h-5 w-5 text-purple-500" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              Progress Tracking
            </h3>
            <p className="text-gray-600">
              Gain actionable insights and track progress visually to stay ahead
              of your goals.
            </p>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="animate-fade-in-up relative mb-16 delay-200">
          <div className="max-h-[575px] overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
            <div className="relative aspect-video w-full">
              <Image
                alt="Dashboard Preview"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                src="/dashboard_preview.png"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/100" />

            <div className="animate-float absolute bottom-32 left-[10px] z-10 md:bottom-40 md:left-14">
              <div className="flex h-14 w-14 -rotate-12 transform items-center justify-center rounded-xl bg-cyan-50 shadow-lg transition-all duration-500 hover:rotate-0 hover:shadow-xl md:h-28 md:w-28">
                <MousePointerClick className="h-8 w-8 text-cyan-500 md:h-16 md:w-16" />
              </div>
            </div>

            <div className="animate-float absolute right-[8px] top-32 z-10 delay-200 md:right-8 md:top-40">
              <div className="flex h-14 w-14 rotate-6 transform items-center justify-center rounded-xl bg-green-50 shadow-lg transition-all duration-500 hover:rotate-0 hover:shadow-xl md:h-28 md:w-28">
                <DraftingCompass className="h-8 w-8 text-green-500 md:h-16 md:w-16" />
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="animate-fade-in-up mb-16 text-center delay-300">
          <h3 className="mb-4 text-2xl font-bold tracking-wider sm:text-3xl lg:text-5xl">
            Centralized Knowledge Hub
          </h3>
          <p className="mb-16 text-gray-500">
            Say goodbye to scattered bookmarks and endless tabs—store everything
            in a simple, intuitive system.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Large card (top left) */}
            <div className="relative col-span-1 h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:col-span-2 lg:col-span-3">
              <div className="relative aspect-video w-full">
                <Image
                  alt="dashboard"
                  className="object-cover"
                  fill
                  src="/dashboard_preview.png"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 text-white">
                <h4 className="mb-2 text-xl font-semibold md:text-2xl">
                  Collaborate and Share Effortlessly
                </h4>
                <p className="text-gray-300">
                  Share links, notes, and insights with your team to streamline
                  collaboration and enhance productivity.
                </p>
              </div>
            </div>

            {/* Small card (top right) */}
            <div className="relative col-span-1 h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-square w-full">
                <Image
                  alt="dashboard"
                  className="object-cover"
                  fill
                  src="/dashboard_preview4.png"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 text-white">
                <h4 className="mb-2 text-xl font-semibold md:text-2xl">
                  Intelligent Content
                </h4>
                <p className="text-gray-300">
                  Organize your saved links and notes effectively with smart
                  tools.
                </p>
              </div>
            </div>

            {/* Small card (middle left) */}
            <div className="relative col-span-1 h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-square w-full">
                <Image
                  alt="dashboard"
                  className="object-cover"
                  fill
                  src="/dashboard_preview3.png"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 text-white">
                <h4 className="mb-2 text-xl font-semibold md:text-2xl">
                  Advanced Organization
                </h4>
                <p className="text-gray-300">
                  Use tags and filters to structure your content for easy
                  retrieval.
                </p>
              </div>
            </div>

            {/* Large card (bottom right) */}
            <div className="relative col-span-1 h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:col-span-2 lg:col-span-3">
              <div className="relative aspect-video w-full">
                <Image
                  alt="dashboard"
                  className="object-cover"
                  fill
                  src="/dashboard_preview2.png"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 text-white">
                <h4 className="mb-2 text-xl font-semibold md:text-2xl">
                  Real-Time Updates
                </h4>
                <p className="text-gray-300">
                  Keep all your notes and links up to date with automatic
                  syncing across your devices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="animate-fade-in-up text-center text-lg font-semibold tracking-widest text-gray-700 delay-500">
          And a lot More...
          <ArrowDown className="ml-2 inline-block h-6 w-6 animate-bounce text-gray-700" />
        </p>
      </div>
    </div>
  );
}
