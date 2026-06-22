import type { Metadata } from "next";
import { Screen } from "@/lib/screen";

export const metadata: Metadata = {
  title: { absolute: "Repair Management — AMMAC Aircraft Parts" },
  description: "End-to-end component repair management with vetted MRO partners and full traceability.",
};

export default function Page() {
  return <Screen name="repair" />;
}
