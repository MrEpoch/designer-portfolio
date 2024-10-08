import React from "react";
import Landing from "./_sections/Landing";
import { Separator } from "@/components/ui/separator";
import Gallery from "./_sections/Gallery";

export default function page() {
  return (
    <main className="min-h-container">
      <div className="max-w-container">
        <Landing />
        <Separator className="h-1 bg-main-background-300" />
        <Gallery />
      </div>
    </main>
  );
}
