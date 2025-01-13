import { getServerSession } from "next-auth";
import { Redirect } from "../../../components/redirect";

export default async function Homepage() {
  const session = await getServerSession();
  if (!session) {
    return <Redirect to={"/"} />;
  } else {
    return <Redirect to={"/dashboard"} />;
  }
}
