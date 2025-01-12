import Image from "next/image";

const integrations1 = [
  {
    name: "Google Drive",
    icon: "https://www.gstatic.com/images/branding/product/2x/drive_48dp.png",
  },
  {
    name: "Adobe Creative Cloud",
    icon: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
  },
  {
    name: "Jira",
    icon: "https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/favicon.png",
  },
  {
    name: "Gmail",
    icon: "https://www.gstatic.com/images/branding/product/2x/gmail_48dp.png",
  },
  {
    name: "Notion",
    icon: "https://www.notion.so/front-static/favicon.ico",
  },
  { name: "Teams", icon: "https://www.microsoft.com/favicon.ico" },
  {
    name: "Slack",
    icon: "https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png",
  },
];

const integrations2 = [
  { name: "Salesforce", icon: "https://www.salesforce.com/favicon.ico" },
  { name: "GitHub", icon: "https://github.com/favicon.ico" },
  { name: "HubSpot", icon: "https://www.hubspot.com/favicon.ico" },
  {
    name: "Zoom",
    icon: "https://st1.zoom.us/zoom.ico",
  },
  {
    name: "Google Calendar",
    icon: "https://www.gstatic.com/images/branding/product/2x/calendar_48dp.png",
  },
  { name: "MongoDB", icon: "https://www.mongodb.com/favicon.ico" },
  {
    name: "Dropbox",
    icon: "https://cfl.dropboxstatic.com/static/images/favicon-vfl8lUR9B.ico",
  },
];

export default function IntegrationGrid() {
  return (
    <div className="my-8 md:my-16">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6 md:hidden">
        {integrations1.map((integration, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-xl bg-white p-3 shadow-md transition-shadow duration-200 ease-in-out hover:shadow-lg"
          >
            <Image
              src={integration.icon}
              alt={integration.name}
              width={36}
              height={36}
              className="h-8 w-8"
            />
          </div>
        ))}
        {integrations2.map((integration, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-xl bg-white p-3 shadow-md transition-shadow duration-200 ease-in-out hover:shadow-lg"
          >
            <Image
              src={integration.icon}
              alt={integration.name}
              width={36}
              height={36}
              className="h-8 w-8"
            />
          </div>
        ))}
      </div>

      <div className="hidden gap-6 md:grid md:grid-cols-7 md:gap-12">
        <div className="col-span-7 flex justify-end gap-4 md:gap-16">
          {integrations1.map((integration, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-xl bg-white p-3 shadow-md transition-shadow duration-200 ease-in-out hover:shadow-lg md:p-4"
            >
              <Image
                src={integration.icon}
                alt={integration.name}
                width={36}
                height={36}
                className="h-8 w-8 md:h-12 md:w-12"
              />
            </div>
          ))}
        </div>

        <div className="col-span-7 flex justify-start gap-4 md:gap-16">
          {integrations2.map((integration, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-xl bg-white p-3 shadow-md transition-shadow duration-200 ease-in-out hover:shadow-lg md:p-4"
            >
              <Image
                src={integration.icon}
                alt={integration.name}
                width={36}
                height={36}
                className="h-8 w-8 md:h-12 md:w-12"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
