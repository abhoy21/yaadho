import IntegrationGrid from "./integrations-grid";

export default function OtherIntegrations(): React.JSX.Element {
  return (
    <div className="my-24 py-12">
      <div className="flowchart-grid mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="my-16 text-center">
          <h3 className="text-md shadow-secondary/45 mx-auto w-48 rounded-full bg-transparent px-4 py-2 font-medium tracking-widest text-gray-500 shadow-md ">
            INTEGRATIONS
          </h3>
          <h1 className="my-6 text-4xl font-bold tracking-wide text-gray-900">
            Save and Organize the Knowledge <br /> You Discover Every Day.
          </h1>
        </div>

        <IntegrationGrid />
      </div>
    </div>
  );
}
