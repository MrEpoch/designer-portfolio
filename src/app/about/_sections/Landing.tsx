import { constAboutPage } from "@/constants/cs_main";
import React from "react";

export default function Landing() {
  return (
    <section className="min-h-screen w-full py-14">
      <div className="flex flex-col gap-4">
        <div className="max-w-xl space-y-3">
          <h1 className="huge-heading text-start">
            {constAboutPage.landing.heading}
          </h1>
          <p>{constAboutPage.landing.para}</p>
        </div>
        <div className="pt-12">
          <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x divide-main-accent-100 lg:grid-cols-3 lg:gap-x-0">
            {constAboutPage.landing.features.map((item, idx) => (
              <li
                key={idx}
                className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}
              >
                <div className="w-12 h-12 border text-main-200 rounded-full border-main-100 flex items-center justify-center">
                  <item.icon />
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.para}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
