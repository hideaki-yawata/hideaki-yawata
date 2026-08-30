import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type NavTextLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
};

export function NavTextLink({
  children,
  className = "",
  ...props
}: NavTextLinkProps) {
  return (
    <Link
      {...props}
      className={`group relative inline-block ${className}`}
    >
      {children}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 block h-px origin-center scale-x-0 bg-current transition-[scale] duration-500 ease-in-out group-focus-visible:scale-x-100 group-hover:scale-x-100"
      />
    </Link>
  );
}
