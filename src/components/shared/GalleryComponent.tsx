"use client";
import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Image from "next/image";
import Link from "next/link";

export default function GalleryComponent({
  images,
  galleryID,
}: {
  images: any;
  galleryID: string;
}) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      // @ts-ignore
      lightbox = null;
    };
  });

  return (
    <div className="flex flex-wrap -m-4" id={galleryID}>
      {images.map(
        (
          image: {
            title: string;
            largeURL: string;
            thumbnailURL: string;
            width: number;
            height: number;
            description: string;
            heading: string;
          },
          index: number,
        ) => (
          <Link
            href={image.largeURL}
            key={galleryID + "-" + index}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            target="_blank"
            rel="noreferrer"
            aria-label={image.title}
            className="group hover:brightness-75 transition lg:w-1/3 sm:w-1/2 p-4"
          >
            <div className="w-full h-full overflow-hidden">
              <Image
                src={image.thumbnailURL}
                className="w-full h-full object-cover group-hover:scale-[1.03]  transition object-center"
                alt={image.title}
                width={image.width}
                height={image.height}
              />
            </div>
          </Link>
        ),
      )}
    </div>
  );
}
