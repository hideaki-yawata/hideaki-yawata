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
      className={`inline-flex items-center gap-1 border-b border-accent text-accent ${className}`}
    >
      <span className="text-base font-semibold italic leading-[1.5]">
        View all work
      </span>
      <IconImage
        src={images.icons.viewAllArrow}
        width={24}
        height={16}
        className="h-4 w-6 shrink-0"
        alt=""
      />
    </Link>
  );
}
