import Link from "next/link";
import { IconImage } from "@/components/IconImage";
import { NavTextLink } from "@/components/NavTextLink";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { images } from "@/lib/images";
import { githubHref, linkedInHref, navItems } from "@/lib/topPageData";

export function HomeSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[400px] flex-col items-center bg-sub-background px-6 pb-24 pt-16 xl:flex">
      <div className="flex w-full flex-col items-center gap-16">
        <div className="flex w-full flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-2 text-center text-text">
            <p className="text-[36px] font-bold leading-[1.2]">
              HIDEAKI YAWATA
            </p>
            <p className="text-[28px] font-medium leading-[1.5]">
              Portfolio Site
            </p>
          </div>
          <ProfilePhoto priority />
        </div>

        <div className="flex flex-col items-center gap-16">
          <nav
            className="flex flex-col items-center gap-6 text-xl leading-[1.5] text-text"
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
      </div>
    </aside>
  );
}
