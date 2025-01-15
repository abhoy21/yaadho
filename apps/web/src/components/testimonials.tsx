import { Ribbon, Youtube } from "lucide-react";
import Image from "next/image";

export default function Testimonials(): React.JSX.Element {
  return (
    <div className="my-12 py-8 md:my-24 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="my-8 text-center md:my-16">
            <h3 className="md:text-md shadow-secondary/45 mx-auto w-36 rounded-full bg-transparent px-3 py-1.5 text-sm font-medium tracking-widest text-gray-500 shadow-md md:w-48 md:px-4 md:py-2 ">
              TESTIMONIALS
            </h3>
            <h1 className="my-4 px-4 text-2xl font-bold tracking-wide text-gray-900 md:my-6 md:text-4xl">
              Thousands of Professionals <br className="hidden md:block" />{" "}
              Trust Second Brain to Organize Ideas.
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex w-full flex-col gap-8 rounded-xl bg-white px-4 py-4 shadow-lg md:gap-60 md:px-8">
                <h3 className="mt-4 text-base font-medium text-gray-700 md:text-lg">
                  “Second Brain revolutionized how I save and revisit my
                  research. It&apos;s my go-to tool for storing links and
                  summarizing articles.”
                </h3>

                <div className="mb-4 flex items-start md:mb-0">
                  <div className="mr-4">
                    <Image
                      alt="avatar"
                      className="rounded-full"
                      height={48}
                      src="/avatar1.jpeg"
                      width={48}
                    />
                  </div>
                  <div className="flex flex-col gap-1 md:gap-2">
                    <h3 className="text-base font-medium text-gray-700 md:text-lg">
                      Sarah Williams
                    </h3>
                    <p className="text-xs font-bold text-gray-500 md:text-sm">
                      Content Strategist
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col gap-4 rounded-xl bg-gray-100 p-4 shadow-md md:gap-8">
                <h3 className="mt-2 text-base font-medium text-gray-700 md:mt-6 md:text-lg">
                  “I use Second Brain daily to organize my notes and tag
                  important resources for quick access later.”
                </h3>

                <div className="mb-2 flex items-center md:mb-6">
                  <div className="mr-4">
                    <Image
                      alt="avatar"
                      className="rounded-full"
                      height={48}
                      src="/avatar7.jpeg"
                      width={48}
                    />
                  </div>
                  <div className="flex flex-col gap-1 md:gap-2">
                    <h3 className="text-base font-medium text-gray-700 md:text-lg">
                      Alex Johnson
                    </h3>
                    <p className="text-xs font-bold text-gray-500 md:text-sm">
                      Marketing Specialist
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-8 lg:col-span-2">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex w-full flex-col gap-4 rounded-xl bg-gray-100 p-4 shadow-md md:gap-8">
                  <h3 className="text-base font-medium text-gray-700 md:text-lg">
                    “I love how I can organize my saved links and notes into
                    projects. It&apos;s like having a digital library for my
                    mind.”
                  </h3>

                  <div className="flex items-center">
                    <div className="mr-4">
                      <Image
                        alt="avatar"
                        className="rounded-full"
                        height={48}
                        src="/avatar3.jpeg"
                        width={48}
                      />
                    </div>
                    <div className="flex flex-col gap-1 md:gap-2">
                      <h3 className="text-base font-medium text-gray-700 md:text-lg">
                        Emma Davis
                      </h3>
                      <p className="text-xs font-bold text-gray-500 md:text-sm">
                        UX Designer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-4 rounded-xl bg-gray-100 p-4 shadow-md md:gap-8">
                  <h3 className="text-base font-medium text-gray-700 md:text-lg">
                    “Second Brain helps me stay productive by keeping all my
                    learning materials and inspirations in one place.”
                  </h3>

                  <div className="flex items-center">
                    <div className="mr-4">
                      <Image
                        alt="avatar"
                        className="rounded-full"
                        height={48}
                        src="/avatar6.jpeg"
                        width={48}
                      />
                    </div>
                    <div className="flex flex-col gap-1 md:gap-2">
                      <h3 className="text-base font-medium text-gray-700 md:text-lg">
                        Michael Brown
                      </h3>
                      <p className="text-xs font-bold text-gray-500 md:text-sm">
                        Data Scientist
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex w-full flex-col gap-8 rounded-xl bg-gray-100 px-4 py-4 shadow-lg md:gap-60 md:px-8">
                  <h3 className="text-base font-medium text-gray-700 md:text-lg">
                    “With Second Brain, I never lose track of the interesting
                    articles and tutorials I come across.”
                  </h3>

                  <div className="flex items-start">
                    <div className="mr-4">
                      <Image
                        alt="avatar"
                        className="rounded-full"
                        height={48}
                        src="/avatar5.jpeg"
                        width={48}
                      />
                    </div>
                    <div className="flex flex-col gap-1 md:gap-2">
                      <h3 className="text-base font-medium text-gray-700 md:text-lg">
                        Lisa Carter
                      </h3>
                      <p className="text-xs font-bold text-gray-500 md:text-sm">
                        Freelance Writer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex h-[400px] w-full flex-col gap-8 rounded-xl bg-white shadow-lg md:h-auto md:gap-60">
                  <Image
                    alt="testimonial"
                    className="z-0 rounded-xl object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src="/testimonial.jpeg"
                  />

                  <div className="absolute bottom-4 left-4 z-10 flex h-10 w-2/3 items-center justify-center rounded-xl bg-white/25 p-4 backdrop-blur-md md:w-1/2">
                    <h1 className="text-sm font-medium text-white md:text-base">
                      Creative Director Jane
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 -left-10 top-[300px] z-50 hidden md:block">
            <div className="flex h-20 w-20 -rotate-12 transform items-center justify-center rounded-xl bg-emerald-50 shadow-lg shadow-emerald-500/50 md:h-28 md:w-28">
              <Ribbon className="h-12 w-12 text-emerald-500 md:h-16 md:w-16" />
            </div>
          </div>

          <div className="absolute -right-[20px] bottom-[100px] z-50 hidden md:block">
            <div className="flex h-20 w-20 rotate-12 transform items-center justify-center rounded-xl bg-red-50 shadow-lg shadow-red-500/50 md:h-28 md:w-28">
              <Youtube className="h-12 w-12 text-red-600 md:h-16 md:w-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
