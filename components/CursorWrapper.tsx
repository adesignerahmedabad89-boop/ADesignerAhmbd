"use client";

import dynamic from "next/dynamic";

const SplashCursor = dynamic(() => import("@/components/SplashCursor"), { ssr: false });

export default function CursorWrapper() {
  return <SplashCursor />;
}
