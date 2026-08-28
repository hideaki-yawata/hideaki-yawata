import { IconImage } from "@/components/IconImage";
import type { TimelineEntry } from "@/types/work";
import { images } from "@/lib/images";

type TimelineListProps = {
  entries: TimelineEntry[];
};

export function TimelineList({ entries }: TimelineListProps) {
  return (
    <>
      <div className="flex w-full flex-col md:hidden">
        {entries.map((entry) => (
          <div key={entry.period} className="relative flex items-start">
            <div className="flex min-w-0 flex-1 items-end gap-4">
              <div className="w-px shrink-0 self-stretch bg-accent" aria-hidden />
              <div className="flex min-w-0 flex-1 flex-col gap-2 pb-6 text-text">
                <p className="text-xl font-semibold leading-[1.5]">{entry.period}</p>
                <p className="text-xs leading-[1.5]">{entry.description}</p>
              </div>
            </div>
            <IconImage
              src={images.icons.timelineDot}
              width={8}
              height={8}
              className="absolute -left-[3.5px] top-2 size-2 shrink-0"
              alt=""
              aria-hidden
            />
          </div>
        ))}
      </div>

      <div className="hidden w-full grid-cols-4 gap-0 md:grid xl:hidden">
        {entries.map((entry) => (
          <div
            key={entry.period}
            className="relative flex min-w-0 flex-col pt-[7px] pb-0.5"
          >
            <div className="relative w-full">
              <span className="block h-px w-full bg-accent" aria-hidden />
              <IconImage
                src={images.icons.timelineDot}
                width={16}
                height={16}
                className="absolute left-0 top-0 size-4 -translate-y-1/2"
                alt=""
                aria-hidden
              />
            </div>
            <div className="flex flex-col gap-2 pr-4 pt-6 text-text">
              <p className="text-xl font-semibold leading-[1.5]">{entry.period}</p>
              <p className="text-xs leading-[1.5]">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden w-full grid-cols-4 gap-0 xl:grid">
        {entries.map((entry) => (
          <div
            key={entry.period}
            className="relative flex min-w-0 flex-col pt-[7px] pb-0.5"
          >
            <div className="relative w-full">
              <span className="block h-px w-full bg-accent" aria-hidden />
              <IconImage
                src={images.icons.timelineDot}
                width={16}
                height={16}
                className="absolute left-0 top-0 size-4 -translate-y-1/2"
                alt=""
                aria-hidden
              />
            </div>
            <div className="flex flex-col gap-2 pr-4 pt-6 text-text xl:pr-6">
              <p className="text-2xl font-semibold leading-[1.5]">{entry.period}</p>
              <p className="text-base leading-[1.5]">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
