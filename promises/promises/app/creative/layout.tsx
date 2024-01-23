import Footer from "@/components/Footer";

import { Metadata } from "next";
import { Commissioner } from "next/font/google";

const creativeFont = Commissioner({
  weight: "400",
  preload: true,
  subsets: ["latin"],
});
export const metadata: Metadata = {
  robots: {
    index: true,
    nocache: true,
  },
  title: "Capturing Moments: Promises - Wedding Photography",
  description:
    "Explore the artistry of Promises, a premier photography company specializing in exquisite wedding photo shoots.",
};

export default function studioLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <section>
      <div className={`${creativeFont.className} overflow-x-hidden flex flex-col min-h-screen`}>

        <main className="flex-grow bg-black text-white">{children}</main>
        <Footer />
      </div>
    </section>
  );
}
