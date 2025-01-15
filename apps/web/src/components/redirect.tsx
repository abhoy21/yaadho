"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Redirect({ to }: { to: string }): React.JSX.Element {
  const router = useRouter();
  useEffect(() => {
    router.push(to);
  }, [router, to]);

  return <div />;
}
