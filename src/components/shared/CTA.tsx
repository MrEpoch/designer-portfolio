import React from "react";
import Processing from "/public/assets/processing.svg";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-main-background-200 shadow-lg rounded-lg">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image src={Processing} alt="Processing" />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-relaxed font-extrabold font-bebas text-gray-900 dark:text-white">
              Pojdmě rozjet návrh co vás nakopne.
            </h2>
            <p className="mb-6 font-light font-poppins text-main-text-100 md:text-lg dark:text-gray-400">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud{" "}
            </p>
            <Link
              href="/contact"
    className="group inline-flex gap-2 shadow items-center items-center justify-center text-main-text-300 transition from-main-100 to-main-200 bg-gradient-to-r hover:bg-main-background-200 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Kontakt
              <ArrowRight className="group-hover:translate-x-1 transition mb-[2px] w-5 h-5 " />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
