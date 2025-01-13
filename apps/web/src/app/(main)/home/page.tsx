import LandingPage from "../../../components/landing-page";

export default async function Homepage() {
  // const session = await getServerSession();
  // if (!session) {
  //   return <Redirect to={"/"} />;
  // }
  return (
    <div>
      <LandingPage />
    </div>
  );
}
