import localFont from "next/font/local";

/** Same cuts as the app: regular for text, bold file for SemiBold and Bold. */
export const nanumMyeongjo = localFont({
  src: [
    { path: "./nanummyeongjo_regular.ttf", weight: "400", style: "normal" },
    { path: "./nanummyeongjo_bold.ttf", weight: "600", style: "normal" },
    { path: "./nanummyeongjo_bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
});

/** Arapey ships as italic only, matching the author line. */
export const arapeyItalic = localFont({
  src: "./arapey_italic.ttf",
  weight: "400",
  style: "italic",
  display: "swap",
});
