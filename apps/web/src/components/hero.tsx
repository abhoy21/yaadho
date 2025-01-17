import { Button } from "@repo/ui/button";
import { Check, CirclePlay } from "lucide-react";
import Image from "next/image";
import Logo from "./logo";

export default function Hero(): React.JSX.Element {
  return (
    <div className="relative min-h-screen overflow-hidden py-32">
      <div className="net-pattern absolute inset-0">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Sticky Notes */}
          <div className="absolute left-[265px] top-[65px] z-20">
            <Image
              alt="user"
              className="drop-shadow-lg"
              height={48}
              src="/pin.png"
              width={48}
            />
          </div>
          <div className="relative -left-[25px] top-[75px] mb-4 p-4 md:absolute md:-left-[150px] md:top-[100px] md:mb-0 md:p-0">
            <div className="w-full -rotate-6 transform rounded-lg bg-yellow-100 p-4 shadow-xl transition-transform duration-200 hover:scale-105 md:w-[450px] md:p-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-md md:h-10 md:w-10">
                  <Check className="h-5 w-5 text-blue-600 md:h-6 md:w-6" />
                </div>
                <div className="flex-1">
                  <p className="md:text-md font-handwriting text-sm font-medium leading-snug text-gray-900">
                    A smart and intuitive platform to save, organize, and
                    revisit crucial details. Never lose track of important
                    insights or ideas again.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-4 md:absolute md:-left-[130px] md:top-[160px] md:p-0">
            <div className="w-full -rotate-[25deg] transform rounded-lg bg-yellow-100 p-4 shadow-xl transition-transform duration-200 hover:scale-105 md:w-[450px] md:p-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-md md:h-10 md:w-10">
                  <Check className="h-5 w-5 text-blue-600 md:h-6 md:w-6" />
                </div>
                <div className="flex-1">
                  <p className="md:text-md font-handwriting text-sm font-medium leading-snug text-gray-900">
                    Keep track of all your essential links, notes, and resources
                    effortlessly. Transform the way you manage information to
                    boost productivity and simplify your daily tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reminder Cards */}
          <div className="absolute -right-20 top-20 hidden rotate-2 transform md:block">
            <div
              className="shadow-[6px -6px 10px rgba(0, 0, 0, 1)] absolute -top-[20px] left-0 z-50 h-10 w-40 rounded-t-lg bg-green-100"
              style={{
                clipPath: "polygon(0 100%, 20% 0, 80% 0, 100% 100%)",
              }}
            />
            <div className="w-80 space-y-10 rounded-xl bg-green-100 p-6  shadow-xl">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="min-w-full">
                    <h1 className="text-lg font-bold text-gray-800">
                      Smart Reminder
                    </h1>
                    <div className="mt-2 rounded-md bg-white px-4 py-2 shadow-lg">
                      <p className="text-center text-sm text-gray-500">
                        Stay on top of your meetings and tasks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-10 top-[125px]">
                <div className="flex h-32 w-32 -rotate-12 transform items-center justify-center rounded-xl bg-opacity-50 shadow-xl backdrop-blur-md" />
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="min-w-full space-y-2 rounded-lg bg-white p-6 shadow-xl">
                    <h3 className="text-md font-medium text-gray-800">
                      Today&apos;s Key Focus
                    </h3>
                    <p className="text-xs text-gray-500">
                      Discuss strategies with the marketing team.
                    </p>
                    <p className="mt-1 rounded-md bg-green-200 py-1 text-center text-xs text-green-600">
                      13:00 - 13:45
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="absolute left-0 right-0 top-[200px]">
            <div className=" mx-auto mt-16 max-w-4xl text-center">
              <h1 className="font-montserrat mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:mb-6 md:text-[5rem]">
                Capture, Organize, and Access
                <span className="font-montserrat mt-2 block text-gray-400">
                  everything in one digital space
                </span>
              </h1>
              <p className="font-montserrat mb-10 text-lg text-gray-800 md:text-xl">
                everything in one digital space
              </p>
              <div className="absolute left-0 right-0 flex items-center justify-center">
                <Button
                  className="hover:bg-secondary py-4 pr-6"
                  icon={<CirclePlay className=" h-6 w-6 text-white" />}
                  size="lg"
                  text="Get Demo"
                  variant="primary"
                />
              </div>
            </div>
          </div>

          {/* Logo Center Component */}
          <div className="absolute left-1/2 top-[300px] -translate-x-1/2 -translate-y-20 transform md:top-[200px]">
            <div className="bg-background shadow-secondary/45 flex items-center justify-center rounded-lg p-2  shadow-xl md:rounded-2xl md:p-4">
              <Logo />
            </div>
          </div>

          {/* Task Card */}
          <div className="absolute left-[15px] top-[550px] hidden -rotate-6 transform md:block">
            <div className="absolute -right-10 -top-[45px]">
              <div className="flex h-32 w-32 rotate-12 transform items-center justify-center rounded-xl bg-opacity-25 shadow-xl backdrop-blur-md" />
            </div>
            <div
              className="shadow-[6px -6px 10px rgba(0, 0, 0, 1)] absolute -top-[24px] left-0 z-50 h-10 w-40 rounded-t-lg bg-blue-100"
              style={{
                clipPath: "polygon(0 100%, 20% 0, 80% 0, 100% 100%)",
              }}
            />
            <div className="w-96 rounded-2xl bg-blue-100 p-6 shadow-xl">
              <h1 className="mb-6 text-lg font-semibold text-gray-900">
                Today&apos;s Highlights
              </h1>
              <div className="space-y-6">
                <div className="mt-1 rounded-lg bg-white px-4 py-2">
                  <div className="my-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                        T
                      </div>
                      <span className="text-gray-700">
                        Brainstorm campaign ideas
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-3">
                        <Image
                          alt="user"
                          className="rounded-full border-2 border-white shadow-sm"
                          height={24}
                          src="/person1.jpg"
                          width={24}
                        />
                        <Image
                          alt="user"
                          className="rounded-full border-2 border-white shadow-sm"
                          height={24}
                          src="/person2.jpg"
                          width={24}
                        />
                      </div>
                      <span className="text-sm text-gray-500">60%</span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[60%] rounded-full bg-blue-500" />
                  </div>
                </div>

                <div className="mt-1 rounded-lg bg-white px-4 py-2">
                  <div className="my-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs font-medium text-white">
                        D
                      </div>
                      <span className="text-gray-700">Design PPT #4</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-3">
                        <Image
                          alt="user"
                          className="rounded-full border-2 border-white shadow-sm"
                          height={24}
                          src="/person1.jpg"
                          width={24}
                        />
                        <Image
                          alt="user"
                          className="rounded-full border-2 border-white shadow-sm"
                          height={24}
                          src="/person2.jpg"
                          width={24}
                        />
                      </div>
                      <span className="text-sm text-gray-500">25%</span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[25%] rounded-full bg-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other app Integrations */}
          <div className="absolute right-[15px] top-[500px] rotate-6 scale-50 transform sm:scale-75 md:top-[600px] lg:scale-100">
            <div
              className="shadow-[6px -6px 10px rgba(0, 0, 0, 1)] absolute -top-[24px] left-0 z-50 h-10 w-40 rounded-t-lg bg-fuchsia-100"
              style={{
                clipPath: "polygon(0 100%, 20% 0, 80% 0, 100% 100%)",
              }}
            />
            <div className="w-96 rounded-2xl bg-fuchsia-100 p-6 shadow-xl">
              <h3 className="mb-6 text-lg font-semibold text-gray-900">
                Integrations
              </h3>
              <div className="my-12 flex items-center justify-center gap-2">
                <div className="flex -space-x-2">
                  <Image
                    alt="user"
                    className="z-0 -rotate-12 transform rounded-2xl border-2 border-white shadow-md"
                    height={72}
                    src="/gmail.jpg"
                    width={72}
                  />
                  <Image
                    alt="user"
                    className="z-10 -translate-y-4 rounded-2xl border-2 border-white shadow-md"
                    height={72}
                    src="/Meta.jpg"
                    width={72}
                  />
                  <Image
                    alt="user"
                    className="z-0 rotate-12 transform rounded-2xl border-2 border-white shadow-md"
                    height={72}
                    src="/netflix.jpg"
                    width={72}
                  />
                </div>
              </div>
              <span className="flex justify-end">{"------>"} Try Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
