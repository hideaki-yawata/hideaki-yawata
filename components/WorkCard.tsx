import Image from "next/image";
import type { MicroCMSWorkItem } from "@/lib/microcms";

type WorkCardProps = {
  item: MicroCMSWorkItem;
};

const categoryTagBaseClassName =
  "inline-flex items-center rounded-[4px] bg-sub-background px-1.5 text-xs font-medium leading-[1.5]";

const categoryTagClassNames: Record<string, string> = {
  Design: `${categoryTagBaseClassName} text-accent`,
  Coding: `${categoryTagBaseClassName} text-category-design`,
  WordPress: `${categoryTagBaseClassName} text-category-wordpress`,
  "Headless CMS": `${categoryTagBaseClassName} text-category-headless-cms`,
};

const defaultCategoryTagClassName = `${categoryTagBaseClassName} text-accent`;

export function WorkCard({ item }: WorkCardProps) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2"
    >
      <div className="relative aspect-[384/240] w-full overflow-hidden">
        <Image
          src={item.thumbnail.url}
          alt=""
          fill
          className="object-cover transition-[scale] duration-500 ease-out group-hover:scale-110"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 384px"
        />
        {item.type && (
          <span className="absolute right-0 top-0 bg-text px-1.5 py-0.5 text-sm font-medium leading-[1.5] text-background">
            {item.type.name}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold leading-[1.5] text-text">
          {item.title}
        </h3>
        <ul className="flex flex-wrap gap-1">
          {item.category.map((categoryItem) => (
            <li
              key={categoryItem.name}
              className={
                categoryTagClassNames[categoryItem.name] ??
                defaultCategoryTagClassName
              }
            >
              #{categoryItem.name}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
