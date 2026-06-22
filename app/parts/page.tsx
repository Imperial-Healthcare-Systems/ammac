import type { Metadata } from "next";
import { Screen } from "@/lib/screen";

export const metadata: Metadata = {
  title: { absolute: "Parts Search & Live Inventory — AMMAC Aircraft Parts" },
  description: "Search AMMAC live aircraft parts inventory across rotables, expendables and consumables.",
};

export default function Page() {
  return <Screen name="parts" />;
}
