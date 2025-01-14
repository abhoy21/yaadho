import { getServerSession } from "next-auth";
import DashboardPreviewPage from "../../components/dashboard-page";
import { Redirect } from "../../components/redirect";

export default async function Dashboard() {
  const session = await getServerSession();
  if (!session) {
    return <Redirect to={"/"} />;
  }
  return (
    <div>
      <DashboardPreviewPage />
    </div>
  );
}
