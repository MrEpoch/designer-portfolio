import React from "react";
import GalleryComponent from "@/components/shared/GalleryComponent";
import { constPhotosPage } from "@/constants/cs_main";

export default function Gallery() {
  return (
    <section className="text-gray-600 body-font min-h-screen w-full">
      <div className="py-24">
        <GalleryComponent
          images={constPhotosPage.gallery.content}
          galleryID="gallery-1"
        />
      </div>
    </section>
  );
}
