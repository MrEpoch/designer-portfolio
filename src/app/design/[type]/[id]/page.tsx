import React from "react";
import { constDesigns } from "@/constants/cs_main";
import { redirect } from "next/navigation";
import Scroller from "../_sections/Scroller";
import Image from "next/image";
import ShapedDivider from "@/components/ui/shape-divider";

function SliderElement({ sliderContent }: { sliderContent: any }) {
  return (
    <div className="w-full max-w-container py-4 min-h-screen gap-8 flex items-center justify-center lg:flex-row flex-col">
      <div className="flex h-full lg:items-start items-center flex-1 justify-center flex-col gap-4 w-full">
        <h2 className="huge-heading p-0 m-0 text-start">
          {sliderContent.title}
        </h2>
        <p className="text-sm text-main-text-100">{sliderContent.para}</p>
      </div>
      <div className="w-full h-full flex items-center justify-center flex-1">
        <Image
          src={sliderContent.image}
          alt="hero"
          height={720}
          width={1400}
          className="h-fit w-fit object-contain"
        />
      </div>
    </div>
  );
}

export default function page({
  params,
}: {
  params: { type: string; id: string };
}) {
  const type = params.type;
  const id = params.id;

  if (
    !type ||
    (type !== "web" && type !== "plakat" && type !== "logo") ||
    !id
  ) {
    redirect("/design");
  }

  // @ts-ignore
  const designData = constDesigns.tabs[type].find((tab) => tab.id === id);

  if (!designData) {
    redirect("/design");
  }

  return (
    <main className="min-h-container scroll-snap-container">
      <div className="max-w-container">
        <Scroller designData={designData} />
      </div>
      <div
        className={`min-h-full flex flex-col gap-16 w-full p-7`}
        style={{ background: designData.infoSlider.color }}
      >
        {designData.infoSlider.content.map((sliderContent, i) => (
          <SliderElement key={i} sliderContent={sliderContent} />
        ))}
      </div>
      <div className="w-full relative bg-main-background-100 min-h-[200px]">
        <ShapedDivider
          currentSection={1}
          pageLength={3}
          style={`${designData.infoSlider.color}`}
        />
      </div>
    </main>
  );
}
