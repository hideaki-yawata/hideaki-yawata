import type { Metadata } from "next";
import { HomeLink } from "@/components/HomeLink";

export const metadata: Metadata = {
  title: "404 | Hideaki Yawata Portfolio Site",
  description: "This page could not be found.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-sub-background px-6 text-text">
      <div className="flex flex-col items-center">
        <p className="text-[32px] font-bold leading-[1.5] md:text-[48px]">
          404
        </p>
        <div className="flex flex-col items-center gap-8">
          <p className="text-base font-normal leading-[1.5] md:text-2xl">
            This page could not be found.
          </p>
          <HomeLink />
        </div>
      </div>
    </div>
  );
}
