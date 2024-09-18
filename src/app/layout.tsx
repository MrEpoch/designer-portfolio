import type { Metadata } from "next";
import { Poppins, Dancing_Script, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-dancing-script",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-poppins",
});
const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Designer Lukáš Elister",
  description:
    "Designerské portfolio Lukáše Elistera, designer sídlící v oblasti Plzeň, zkušený na sociální sítě a webový design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${dancing_script.variable} ${bebas_neue.variable} bg-main-background-100`}
      >
        <Header />
        <div className="w-full h-16" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
