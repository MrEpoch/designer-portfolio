import { constDesignPage } from "@/constants/cs_main";
import React from "react";

export default function Landing() {
  return (
    <section className="min-h-full w-full py-14">
      <div className="flex flex-col gap-4">
        <div className="max-w-xl space-y-3">
          <h1 className="huge-heading text-start">
            <span className="font-dancing">
              {constDesignPage.landing.heading}
            </span>
            &nbsp;{constDesignPage.landing.heading2}
          </h1>
          <p>{constDesignPage.landing.para}</p>
        </div>
      </div>
    </section>
  );
}
