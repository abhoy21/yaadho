/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.adobe.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wac-cdn.atlassian.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.microsoft.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "a.slack-edge.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.salesforce.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.hubspot.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "st1.zoom.us",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.notion.so",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cfl.dropboxstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.mongodb.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
