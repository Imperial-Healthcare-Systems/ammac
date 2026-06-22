import type { Metadata } from "next";
import { Screen } from "@/lib/screen";

export const metadata: Metadata = {
  title: { absolute: "Contact Us — AMMAC Aircraft Parts" },
  description: "Contact AMMAC Aircraft Parts for quotes, AOG support and supply chain solutions.",
};

export default function Page() {
  return <Screen name="contact" />;
}
