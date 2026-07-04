"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// The civic app lives under the (app) route group; the unified feed is home.
// A static host can't issue an HTTP redirect, so bounce to /feed on the client.
export default function RootPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/feed");
  }, [router]);
  return null;
}
