import { tabs } from "@/components/shared/TabComponents";
import { Tabs } from "@/components/ui/tabs";
import React from "react";

export default function DesignTabs() {
  return (
    <section className="min-h-screen w-full py-16">
      <Tabs tabs={tabs} />
    </section>
  );
}
