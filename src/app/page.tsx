import CTA from "@/components/shared/CTA";
import Gallery from "./_sections/Gallery";
import Landing from "./_sections/Landing";
import { Separator } from "@/components/ui/separator";
import Designs from "./_sections/Designs";

export default function Home() {
  return (
    <main className="h-view-container">
      <div className="max-w-container">
        <Landing />
        <Separator className="h-1 bg-main-background-300" />
        <Gallery />
        <Separator className="h-1 bg-main-background-300" />
        <Designs />
        <Separator className="h-1 bg-main-background-300" />
        <CTA />
      </div>
    </main>
  );
}
