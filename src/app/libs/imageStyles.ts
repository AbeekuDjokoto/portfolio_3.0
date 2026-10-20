import type { CSSProperties } from "react";

/** Keeps Next.js Image aspect ratio when width/height props differ from rendered size. */
export function fixedImageStyle(
  maxWidth: number,
  maxHeight: number = maxWidth
): CSSProperties {
  return {
    width: "auto",
    height: "auto",
    maxWidth,
    maxHeight,
  };
}
