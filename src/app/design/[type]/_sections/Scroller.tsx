import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { Tab } from "@/types";

export default function Scroller({ designData }: { designData: Tab }) {
  return (
    <ContainerScroll
      titleComponent={
        <>
          <h1 className="huge-heading">{designData.title}</h1>
        </>
      }
    >
      <Image
        src="/assets/InstagramPlakat.png"
        alt="hero"
        height={720}
        width={1400}
        className="mx-auto snap-center rounded-2xl object-cover h-full object-left-top"
        draggable={false}
      />
    </ContainerScroll>
  );
}
