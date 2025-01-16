import CardSectionPublic from "../../../components/card-public-view";

export default function DashboardPublicPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-fuchsia-100">
      <div className="mx-auto p-4 md:ml-[72px] md:w-[calc(100%-72px)] md:p-6 lg:p-8">
        {/* <Navbar />
        <Header /> */}
        <div className="mt-16 flex items-center justify-center">
          <CardSectionPublic />
        </div>
      </div>
    </div>
  );
}
