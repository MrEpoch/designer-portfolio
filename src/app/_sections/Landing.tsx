import Image from "next/image";
import React from "react";
import DesignPlakat from "/public/assets/InstagramPlakat.png";
import Link from "next/link";

export default function Landing() {
  return (
    <section className="min-h-screen w-full py-8 flex items-center gap-8 md:flex-row flex-col">
      <div className="w-full flex flex-col gap-6">
        <div className="text-center space-y-4">
          <h1 className={`text-gray-800 font-bold text-4xl md:text-5xl`}>
            <span className={`font-dancing font-extrabold`}>
              Designuju topové posty
            </span>
            <span className="text-main-200 md:text-4xl text-3xl">
              {" "}
              a wireframy
            </span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-start w-full">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
        </div>
        <div className="justify-center gap-4 items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
          <Link
            href="/contact"
            className="px-10 py-3.5 w-full bg-main-200 hover:bg-red-400 transition hover:-translate-y-[1px] hover:-translate-x-[1px] text-main-text-300 text-center rounded-md shadow-md block sm:w-auto"
          >
            Kontaktovat
          </Link>
          <Link
            href="/about"
            className="px-10 py-3.5 w-full text-main-text-100 text-center rounded-md duration-300 
    bg-main-background-200 hover:bg-main-background-300 transition hover:-translate-y-[1px] hover:-translate-x-[1px] shadow-md block sm:w-auto"
          >
            O mně
          </Link>
        </div>
      </div>
      <div className="w-full bg-main-100">
        <Image
          priority
          loading="eager"
          src={DesignPlakat}
          className="skew-y-6 -skew-x-6"
          alt="Design plakát"
        />
      </div>
    </section>
  );
}
