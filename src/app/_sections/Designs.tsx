import { tabs } from "@/components/shared/TabComponents";
import { Tabs } from "@/components/ui/tabs";
import React from "react";

export default function Designs() {
  return (
    <section className="w-full min-h-screen gap-6 flex py-16 flex-col">
      <h2 className="huge-heading">
        <span className="font-dancing font-extrabold text-main-text-100">
          Moje
        </span>{" "}
        designy
      </h2>
      <Tabs tabs={tabs} />
    </section>
  );
}
