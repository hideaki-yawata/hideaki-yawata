import { ProfilePhoto } from "@/components/ProfilePhoto";

export function HeroSection() {
  return (
    <section className="flex w-full justify-center bg-sub-background px-6 py-12 md:p-12">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-12">
        <ProfilePhoto priority />
        <div className="flex flex-col items-center gap-2 text-center text-text md:items-start md:text-left">
          <h1 className="text-[28px] font-bold leading-[1.2] md:text-[36px]">
            HIDEAKI YAWATA
          </h1>
          <p className="text-xl font-medium leading-[1.5] md:text-[28px]">
            Portfolio Site
          </p>
        </div>
      </div>
    </section>
  );
}
