import Link from "next/link";
import { PillArrowIcon } from "@/components/PillArrowIcon";

export function HomeLink() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-1 rounded-[14px] bg-accent px-3 py-0.5 text-base font-semibold italic leading-[1.5] text-background"
    >
      <PillArrowIcon
        direction="back"
        className="h-4 w-6 transition-transform duration-500 ease-in-out group-hover:-translate-x-1"
      />
      <span>Back to Home</span>
    </Link>
  );
}
