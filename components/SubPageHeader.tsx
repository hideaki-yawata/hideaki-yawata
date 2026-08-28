type SubPageHeaderProps = {
  title: string;
};

export function SubPageHeader({ title }: SubPageHeaderProps) {
  return (
    <section className="flex min-h-[154px] items-center justify-center bg-sub-background px-6 py-12 md:min-h-[166px] md:justify-start md:px-12 md:py-16">
      <h1 className="w-full text-center text-2xl font-bold leading-[1.2] text-text md:text-left md:text-[32px]">
        {title}
      </h1>
    </section>
  );
}
