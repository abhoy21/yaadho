import DashboardNavbar from "./dashboard-navbar";

export default function DashboardPreviewPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto p-4 md:ml-[72px] md:w-[calc(100%-72px)] md:p-6 lg:p-8">
        <DashboardNavbar />
      </div>
    </div>
  );
}
