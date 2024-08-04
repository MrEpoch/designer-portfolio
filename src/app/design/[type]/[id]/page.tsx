import React from "react";
import { constDesigns } from "@/constants/cs_main";
import { redirect } from "next/navigation";
import Scroller from "../_sections/Scroller";
import Parallax from "@/components/ui/parallax-scroll";
import Image from "next/image";

function SliderElement({ sliderContent }: { sliderContent: any }) {
  return (
    <div className="w-full min-h-screen gap-8 flex items-center justify-center shadow-lg lg:flex-row flex-col">
      <div className="flex h-full items-center flex-1 justify-center flex-col gap-4 w-full">
        <h2 className="huge-heading p-0 m-0 text-start">
          {sliderContent.title}
        </h2>
        <p className="text-sm text-main-text-100">{sliderContent.para}</p>
      </div>
      <div className="w-full h-full flex-1">
        <Image
          src={sliderContent.image}
          alt="hero"
          height={720}
          width={1400}
          className="w-full h-full object-cover"
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
        <div
          className={`min-h-screen w-full p-8 rounded-lg`}
          style={{ background: designData.infoSlider.color }}
        >
          <div className="flex flex-col gap-4 overflow-y-scroll scroll-snap-container max-h-[700px] h-full p-4">
            <Parallax
              elementList={designData.infoSlider.content.map(
                (sliderContent, i) => (
                  <SliderElement key={i} sliderContent={sliderContent} />
                ),
              )}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
