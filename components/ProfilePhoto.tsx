import Image from "next/image";
import { images } from "@/lib/images";

type ProfilePhotoProps = {
  priority?: boolean;
};

export function ProfilePhoto({ priority = false }: ProfilePhotoProps) {
  return (
    <div className="relative size-40 shrink-0 overflow-hidden rounded-full">
      <Image
        src={images.profileHero}
        alt="Hideaki Yawata"
        width={221}
        height={331}
        className="absolute -left-[39px] -top-[24px] max-w-none"
        sizes="160px"
        priority={priority}
      />
    </div>
  );
}
