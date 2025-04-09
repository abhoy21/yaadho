import { Ribbon, Youtube } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "Second Brain revolutionized how I save and revisit my research. It's my go-to tool for storing links and summarizing articles.",
    name: "Sarah Williams",
    role: "Content Strategist",
    avatar: "/avatar1.jpeg",
    featured: true,
    color: "bg-white",
  },
  {
    id: 2,
    quote:
      "I use Second Brain daily to organize my notes and tag important resources for quick access later.",
    name: "Alex Johnson",
    role: "Marketing Specialist",
    avatar: "/avatar7.jpeg",
    color: "bg-gray-100",
  },
  {
    id: 3,
    quote:
      "I love how I can organize my saved links and notes into projects. It's like having a digital library for my mind.",
    name: "Emma Davis",
    role: "UX Designer",
    avatar: "/avatar3.jpeg",
    color: "bg-gray-100",
  },
  {
    id: 4,
    quote:
      "Second Brain helps me stay productive by keeping all my learning materials and inspirations in one place.",
    name: "Michael Brown",
    role: "Data Scientist",
    avatar: "/avatar6.jpeg",
    color: "bg-gray-100",
  },
  {
    id: 5,
    quote:
      "With Second Brain, I never lose track of the interesting articles and tutorials I come across.",
    name: "Lisa Carter",
    role: "Freelance Writer",
    avatar: "/avatar5.jpeg",
    featured: true,
    color: "bg-gray-100",
  },
  {
    id: 6,
    quote:
      "As a creative professional, Second Brain has become my external memory for all visual inspirations and references.",
    name: "Jane Smith",
    role: "Creative Director",
    avatar: "/testimonial.jpeg",
    image: "/testimonial.jpeg",
    featured: true,
    color: "bg-white",
  },
];

export default function Testimonials(): React.JSX.Element {
  return (
    <div className="my-12 py-8 md:my-24 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="animate-fade-in-up my-8 text-center md:my-16">
            <h3 className="md:text-md shadow-secondary/45 animate-fade-in mx-auto w-36 rounded-full bg-transparent px-3 py-1.5 text-sm font-medium tracking-widest text-gray-500 shadow-md md:w-48 md:px-4 md:py-2">
              TESTIMONIALS
            </h3>
            <h1 className="animate-fade-in-up my-4 px-4 text-2xl font-bold tracking-wide text-gray-900 delay-100 md:my-6 md:text-4xl">
              Thousands of Professionals <br className="hidden md:block" />{" "}
              Trust Second Brain to Organize Ideas.
            </h1>
          </div>

          <div className="animate-fade-in-up grid grid-cols-1 gap-4 delay-200 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {/* Large card (top left) */}
            <div className="animate-fade-in-up delay-300 md:col-span-1 lg:row-span-2">
              <div
                className={`flex h-full flex-col gap-8 rounded-2xl ${testimonials[0].color} p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <h3 className="mt-4 text-lg font-medium text-gray-700 md:text-xl">
                  {testimonials[0].quote}
                </h3>
                <div className="mt-auto flex items-start">
                  <div className="mr-4">
                    <Image
                      alt="avatar"
                      className="rounded-full"
                      height={56}
                      width={56}
                      src={testimonials[0].avatar}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-medium text-gray-700">
                      {testimonials[0].name}
                    </h3>
                    <p className="text-sm font-bold text-gray-500">
                      {testimonials[0].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium cards (top right) */}
            <div className="animate-fade-in-up delay-400 md:col-span-1">
              <div
                className={`flex h-full flex-col gap-4 rounded-2xl ${testimonials[1].color} p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <h3 className="text-lg font-medium text-gray-700">
                  {testimonials[1].quote}
                </h3>
                <div className="mt-auto flex items-center">
                  <div className="mr-4">
                    <Image
                      alt="avatar"
                      className="rounded-full"
                      height={48}
                      width={48}
                      src={testimonials[1].avatar}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-medium text-gray-700">
                      {testimonials[1].name}
                    </h3>
                    <p className="text-sm font-bold text-gray-500">
                      {testimonials[1].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up delay-500 md:col-span-1">
              <div
                className={`flex h-full flex-col gap-4 rounded-2xl ${testimonials[2].color} p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <h3 className="text-lg font-medium text-gray-700">
                  {testimonials[2].quote}
                </h3>
                <div className="mt-auto flex items-center">
                  <div className="mr-4">
                    <Image
                      alt="avatar"
                      className="rounded-full"
                      height={48}
                      width={48}
                      src={testimonials[2].avatar}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-medium text-gray-700">
                      {testimonials[2].name}
                    </h3>
                    <p className="text-sm font-bold text-gray-500">
                      {testimonials[2].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium cards (middle right) */}
            <div className="animate-fade-in-up delay-600 md:col-span-1">
              <div
                className={`flex h-full flex-col gap-4 rounded-2xl ${testimonials[3].color} p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <h3 className="text-lg font-medium text-gray-700">
                  {testimonials[3].quote}
                </h3>
                <div className="mt-auto flex items-center">
                  <div className="mr-4">
                    <Image
                      alt="avatar"
                      className="rounded-full"
                      height={48}
                      width={48}
                      src={testimonials[3].avatar}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-medium text-gray-700">
                      {testimonials[3].name}
                    </h3>
                    <p className="text-sm font-bold text-gray-500">
                      {testimonials[3].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Large card (bottom left) */}
            <div className="animate-fade-in-up delay-700 md:col-span-1">
              <div
                className={`flex h-full flex-col gap-8 rounded-2xl ${testimonials[4].color} p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <h3 className="text-lg font-medium text-gray-700">
                  {testimonials[4].quote}
                </h3>
                <div className="mt-auto flex items-start">
                  <div className="mr-4">
                    <Image
                      alt="avatar"
                      className="rounded-full"
                      height={56}
                      width={56}
                      src={testimonials[4].avatar}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-medium text-gray-700">
                      {testimonials[4].name}
                    </h3>
                    <p className="text-sm font-bold text-gray-500">
                      {testimonials[4].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature card (bottom right) */}
            <div className="animate-fade-in-up delay-800 md:col-span-1 lg:col-span-2 lg:row-span-1">
              <div className="relative flex h-full min-h-[300px] w-full flex-col rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <Image
                  alt="testimonial"
                  className="z-0 rounded-2xl object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={testimonials[5].image || ""}
                />
                <div className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-xl font-medium text-white md:text-2xl">
                    "{testimonials[5].quote}"
                  </h3>
                  <div className="mt-4 flex items-center">
                    <div className="mr-4">
                      <Image
                        alt="avatar"
                        className="rounded-full border-2 border-white"
                        height={56}
                        width={56}
                        src={testimonials[5].avatar}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-medium text-white">
                        {testimonials[5].name}
                      </h3>
                      <p className="text-sm font-bold text-gray-200">
                        {testimonials[5].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="animate-fade-in absolute inset-0 -left-10 top-[300px] z-50 hidden delay-1000 md:block">
            <div className="flex h-20 w-20 -rotate-12 transform items-center justify-center rounded-xl bg-emerald-50 shadow-lg shadow-emerald-500/50 transition-all duration-500 hover:rotate-0 md:h-28 md:w-28">
              <Ribbon className="h-12 w-12 text-emerald-500 md:h-16 md:w-16" />
            </div>
          </div>

          <div className="animate-fade-in delay-1200 absolute -right-[20px] bottom-[100px] z-50 hidden md:block">
            <div className="flex h-20 w-20 rotate-12 transform items-center justify-center rounded-xl bg-red-50 shadow-lg shadow-red-500/50 transition-all duration-500 hover:rotate-0 md:h-28 md:w-28">
              <Youtube className="h-12 w-12 text-red-600 md:h-16 md:w-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
