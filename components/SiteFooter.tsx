"use client";

const SITE_START_YEAR = 2020;

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center bg-text px-6 py-3 text-background md:px-12 md:py-4">
      <p className="text-[10px] leading-[1.5] md:text-xs">
        © Hideaki Yawata {SITE_START_YEAR}-{currentYear}
      </p>
    </footer>
  );
}
