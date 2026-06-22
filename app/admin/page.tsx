import type { Metadata } from "next";
import { Screen } from "@/lib/screen";

export const metadata: Metadata = {
  title: { absolute: "Admin Portal — AMMAC Aircraft Parts" },
  description: "AMMAC operations portal.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <Screen name="admin" />;
}
