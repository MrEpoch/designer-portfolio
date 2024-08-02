import Link from "next/link";
import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { constHeader } from "@/constants/cs_main";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className={`p-4 fixed top-6 z-50 right-0 w-full`}>
      <div className="rounded-full shadow-md bg-white max-w-container -main-background-300 w-full py-4 flex items-center">
        <Link
          className="inline-flex w-fit flex-1 text-main-200 items-center gap-2"
          href="/"
        >
          <span className="sr-only">{constHeader.srMain}</span>
          <span className={`font-bebas text-3xl`}>
            {constHeader.companyName}
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end w-full">
          <nav aria-label="Global" className="w-full relative hidden md:block ">
            <ul
              className="flex header w-full items-center gap-6 text-md
    "
            >
              {constHeader.links.map((link, i) => (
                <li
                  key={link.href}
                  className="w-full flex justify-between gap-2"
                >
                  <Link
                    aria-label={link.label}
                    className={`transition text-nowrap text-main-text-100 hover:text-main-200`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                  {i !== constHeader.links.length - 1 && (
                    <span className="text-black">/</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={`rounded bg-main-100 hover:bg-main-200 md:hidden`}
              >
                <MenuIcon className="h-6 w-6 text-white" />
                <span className="sr-only">{constHeader.srNav}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="overflow-y-auto md:hidden">
              <Link href="#" prefetch={false}>
                <Image
                  src={constHeader.companyLogo}
                  width={60}
                  height={60}
                  className="object-cover w-8 h-8"
                  alt="logo"
                />
                <span className="sr-only">{constHeader.companyName}</span>
              </Link>
              <ul
                className="flex flex-col items-center gap-6 py-8 text-md
    "
              >
                {constHeader.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      className={`transition text-black`}
                      aria-label={link.label}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>{" "}
      </div>
    </header>
  );
}
