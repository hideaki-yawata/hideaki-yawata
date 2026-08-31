import { useId } from "react";

type PillArrowIconProps = {
  className?: string;
  direction?: "forward" | "back";
};

export function PillArrowIcon({
  className = "h-4 w-6",
  direction = "forward",
}: PillArrowIconProps) {
  const maskId = useId();

  return (
    <svg
      viewBox="0 0 24 16"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={`block shrink-0 ${direction === "back" ? "-scale-x-100" : ""} ${className}`}
      aria-hidden
    >
      <mask
        id={maskId}
        maskUnits="userSpaceOnUse"
        x="0"
        y="3"
        width="24"
        height="10"
        style={{ maskType: "alpha" }}
      >
        <path d="M0 3H24V13H0V3Z" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path d="M22 12V13H1V12H22Z" fill="currentColor" />
        <path
          d="M23.3054 13.2084L22.5983 13.9155L16.9415 8.25862L17.6486 7.55151L23.3054 13.2084Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
