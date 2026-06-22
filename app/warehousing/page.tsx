import type { Metadata } from "next";
import { Screen } from "@/lib/screen";

export const metadata: Metadata = {
  title: { absolute: "Warehousing & Supply Chain — AMMAC Aircraft Parts" },
  description: "Strategic inventory management and global logistics from Dubai and Singapore.",
};

export default function Page() {
  return <Screen name="warehousing" />;
}
