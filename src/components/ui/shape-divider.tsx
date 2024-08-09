"use client";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function ShapedDivider({
  currentSection = 1,
  pageLength = 2,
  style = "",
}) {
  const ref = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (
      pageLength * latest > currentSection + 1 &&
      pageLength * latest < currentSection + 2
    )
      setSvgHeight(pageLength * latest * (currentSection * 100));
    const currentScrollSection = pageLength * latest;
    setSvgHeight(
      currentScrollSection < currentSection
        ? 0
        : currentScrollSection > currentSection + 1
          ? 150
          : (currentScrollSection - currentSection) * 500,
    );
  });

  return (
    <div ref={ref} className={"shape-divider"}>
      <svg
        style={{ height: `${svgHeight}px`, maxHeight: `150px` }}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 0L0 0 892.25 114.72 1200 0z"
          style={{ fill: style }}
        ></path>
      </svg>
    </div>
  );
}
