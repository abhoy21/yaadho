import { getServerSession } from "next-auth";
import React from "react";
import { Redirect } from "../../components/redirect";

interface ChildrenProps {
  children: React.ReactNode;
}

export default async function MainLayout(
  props: ChildrenProps,
): Promise<React.JSX.Element> {
  const session = await getServerSession();

  if (!session?.user) {
    return <Redirect to="/" />;
  }
  return <div className="w-full py-16">{props.children}</div>;
}
