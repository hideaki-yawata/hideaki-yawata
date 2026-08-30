import Link from "next/link";
import { IconImage } from "@/components/IconImage";
import { images } from "@/lib/images";

type ViewAllLinkProps = {
  href: string;
  className?: string;
};

export function ViewAllLink({ href, className = "" }: ViewAllLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex flex-col items-start text-accent ${className}`}
    >
      <span className="inline-flex items-center gap-1">
        <span className="text-base font-semibold italic leading-[1.5]">
          View all work
        </span>
        <IconImage
          src={images.icons.viewAllArrow}
          width={24}
          height={16}
          className="h-4 w-6 shrink-0 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          alt=""
        />
      </span>
      <span
        aria-hidden
        className="h-px w-full bg-accent transition-[width,transform] duration-300 ease-in-out group-hover:w-[calc(100%+4px)]"
      />
    </Link>
  );
}
