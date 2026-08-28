import { IBM_Plex_Sans } from "next/font/google";

/** Single instance — avoids duplicate variable WOFF2 downloads and OTS parse errors. */
export const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});
