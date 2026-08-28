import { ViewAllLink } from "@/components/ViewAllLink";

type SectionHeadingProps = {
  title: string;
  description?: string;
  viewAllHref?: string;
};

export function SectionHeading({
  title,
  description,
  viewAllHref,
}: SectionHeadingProps) {
  return (
    <div className="flex w-full flex-col items-end gap-8 md:gap-12 xl:items-start">
      <div className="flex w-full flex-col gap-4 md:gap-6">
        <h2 className="text-2xl font-bold leading-[1.2] text-text md:text-[32px]">
          {title}
        </h2>
        {description ? (
          <p className="text-xs leading-[1.5] text-text md:text-base">
            {description}
          </p>
        ) : null}
      </div>

      {viewAllHref ? <ViewAllLink href={viewAllHref} /> : null}
    </div>
  );
}
