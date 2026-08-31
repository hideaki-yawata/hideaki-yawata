"use client";

import Link from "next/link";
import { useState } from "react";
import { IconImage } from "@/components/IconImage";
import { MobileNavMenu } from "@/components/MobileNavMenu";
import { NavTextLink } from "@/components/NavTextLink";
import { images } from "@/lib/images";
import { githubHref, linkedInHref, navItems } from "@/lib/topPageData";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-12 items-center bg-sub-background px-6 text-text">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between">
        <Link href="/" className="text-base font-bold leading-[1.5]">
          HIDEAKI YAWATA
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <nav
            className="flex items-center gap-4 text-xs font-normal leading-[1.8] md:text-xs xl:gap-6 xl:text-base xl:font-medium"
            aria-label="Main"
          >
            {navItems.map((item) => (
              <NavTextLink
                key={item.href}
                href={item.href}
                target={"external" in item && item.external ? "_blank" : undefined}
                rel={
                  "external" in item && item.external
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {item.label}
              </NavTextLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={linkedInHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IconImage
                src={images.icons.linkedinFooter}
                width={24}
                height={24}
                className="size-6 invert"
              />
            </Link>
            <Link
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <IconImage
                src={images.icons.githubFooter}
                width={24}
                height={24}
                className="size-6 invert"
              />
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="relative h-[18px] w-[26px] md:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setMenuOpen(true)}
        >
          <IconImage
            src={images.icons.hamburger}
            alt=""
            width={26}
            height={18}
            className="h-full w-full object-contain"
          />
        </button>
      </div>

      <MobileNavMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
