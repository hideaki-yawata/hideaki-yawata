import Link from "next/link";
import { IconImage } from "@/components/IconImage";
import { images } from "@/lib/images";

export function HomeLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1 border-b border-accent text-accent"
    >
      <IconImage
        src={images.icons.viewAllArrow}
        width={24}
        height={16}
        className="h-4 w-6 shrink-0 -scale-x-100"
        alt=""
      />
      <span className="text-base font-semibold italic leading-[1.5]">
        Back to Home
      </span>
    </Link>
  );
}
