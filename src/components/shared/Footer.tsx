import React from "react";
import { Separator } from "../ui/separator";
import { constFooter } from "@/constants/cs_main";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="">
      <div className="max-w-container space-y-8 py-16 lg:space-y-16">
        <Separator className="h-1 bg-main-background-300" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-main-100">
              <Image src={constFooter.logo} alt="logo" width={50} height={50} />
            </div>

            <p className="mt-4 max-w-xs text-gray-500">{constFooter.para}</p>

            <ul className="mt-8 flex gap-6">
              {constFooter.socialLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    rel="noreferrer"
                    target="_blank"
                    className="text-main-text-100 transition hover:opacity-75"
                  >
                    <span className="sr-only">{item.srText}</span>
                    <item.icon className="h-6 w-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900">
                {constFooter.designs.title}
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                {constFooter.designs.links.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-main-text-100 transition hover:opacity-75"
                    >
                      {" "}
                      {item.text}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">
                {constFooter.about.title}
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                {constFooter.about.links.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-main-text-100 transition hover:opacity-75"
                    >
                      {" "}
                      {item.text}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">
                {constFooter.contact.title}
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                {constFooter.contact.links.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-main-text-100 transition hover:opacity-75"
                    >
                      {" "}
                      {item.text}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">
                {constFooter.photos.title}
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                {constFooter.photos.links.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-main-text-100 transition hover:opacity-75"
                    >
                      {" "}
                      {item.text}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500">{constFooter.copyrightNotice}</p>
      </div>
    </footer>
  );
}
