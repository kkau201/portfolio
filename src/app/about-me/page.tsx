"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AboutMePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#about");
  }, [router]);

  return null;
}
