import Link from "next/link";
import { IconImage } from "@/components/IconImage";
import { images } from "@/lib/images";

export function HomeLink() {
  return (
    <Link
      href="/"
      className="group inline-flex flex-col items-start text-accent"
    >
      <span className="inline-flex items-center gap-1">
        <IconImage
          src={images.icons.viewAllArrow}
          width={24}
          height={16}
          className="h-4 w-6 shrink-0 -scale-x-100 transition-transform duration-300 ease-in-out group-hover:-translate-x-1"
          alt=""
        />
        <span className="text-base font-semibold italic leading-[1.5]">
          Back to Home
        </span>
      </span>
      <span
        aria-hidden
        className="h-px w-full bg-accent transition-[width,transform] duration-300 ease-in-out group-hover:w-[calc(100%+4px)] group-hover:-translate-x-1"
      />
    </Link>
  );
}
