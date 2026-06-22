import type { Metadata } from "next";
import { Screen } from "@/lib/screen";

export const metadata: Metadata = {
  title: { absolute: "Why AMMAC — AMMAC Aircraft Parts" },
  description: "Your trusted aviation aftermarket partner — 24/7 AOG support, quality, and reach.",
};

export default function Page() {
  return <Screen name="why" />;
}
