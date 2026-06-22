import type { Metadata } from "next";
import { Screen } from "@/lib/screen";

export const metadata: Metadata = {
  title: { absolute: "Products & Services — AMMAC Aircraft Parts" },
  description: "Aircraft components, rotables, consumables, life-limited parts, special products and defence supply solutions.",
};

export default function Page() {
  return <Screen name="products" />;
}
