import Link from "next/link";
import { Tweet } from "react-tweet";

export const LinkPreview = ({ url }: { url: string }): React.JSX.Element => {
  const getUrlType = (link: string): string | null => {
    if (!link) return null;
    if (link.includes("youtube.com") || link.includes("youtu.be"))
      return "youtube";
    if (link.includes("twitter.com") || link.includes("x.com"))
      return "twitter";
    if (link.includes("github.com")) return "github";
    if (link.includes("linkedin.com")) return "linkedin";
    return null;
  };

  function extractYouTubeID(urlYT: string): string {
    if (!urlYT || typeof urlYT !== "string") {
      return "";
    }
    const regex = new RegExp(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    );

    const match = regex.exec(url);
    return match ? match[1] : "";
  }

  const extractTweetId = (urlTweet: string): string => {
    const regex = new RegExp(/x\.com\/(?:#!\/)?\w+\/status(?:es)?\/(\d+)/);
    const match = regex.exec(urlTweet);

    return match ? match[1] : "";
  };

  const renderPreview = (): React.JSX.Element => {
    const type = getUrlType(url);

    switch (type) {
      case "youtube":
        return (
          <div className="aspect-video w-full">
            <iframe
              allow="encrypted-media; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-xl"
              src={`https://www.youtube.com/embed/${extractYouTubeID(url)}`}
              title="YouTube video player"
            />
          </div>
        );

      case "twitter":
        return (
          <div className="w-full">
            <div className="-mt-6 max-h-[200px] min-h-[100px] w-full overflow-hidden">
              <Tweet id={extractTweetId(url)} />
            </div>
          </div>
        );

      case "github":
        return (
          <div className="rounded-xl border bg-white/50 p-4 backdrop-blur-sm transition-all duration-200 hover:bg-white/90">
            <Link
              className="group flex items-center justify-between"
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex max-h-[500px] min-h-[155px]  items-center gap-3 overflow-hidden">
                <svg
                  className="h-8 w-8 text-gray-700 md:h-24 md:w-24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 md:text-xl">
                    View Repository
                  </span>
                  <span className="text-md mt-4 text-gray-500">
                    {url.split("github.com/")[1]}
                  </span>
                </div>
              </div>
              <svg
                className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </Link>
          </div>
        );

      case "linkedin":
        return (
          <div className="rounded-xl border bg-white/80 p-4 backdrop-blur-sm transition-all duration-200 hover:bg-white/90">
            <Link
              className="group flex items-center justify-between"
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">
                    View on LinkedIn
                  </span>
                  <span className="text-sm text-gray-500">
                    Professional Network
                  </span>
                </div>
              </div>
              <svg
                className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </Link>
          </div>
        );

      default:
        return (
          <div className="rounded-xl border bg-white/80 p-4 backdrop-blur-sm transition-all duration-200 hover:bg-white/90">
            <Link
              className="group flex items-center justify-between"
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">
                    External Link
                  </span>
                  <span className="max-w-[200px] truncate text-sm text-gray-500">
                    {url}
                  </span>
                </div>
              </div>
              <svg
                className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </Link>
          </div>
        );
    }
  };

  return renderPreview();
};
