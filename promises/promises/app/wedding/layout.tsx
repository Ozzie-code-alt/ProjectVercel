import Footer from "@/components/Footer";
import WeddingNavbar from "@/components/WeddingNavbar";
import { Metadata } from "next";
import { Caudex } from "next/font/google";

const weddingFont = Caudex({
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
      <div
        className={`${weddingFont.className} overflow-x-hidden flex flex-col min-h-screen`}
      >
        <WeddingNavbar />
        {children}
    
      </div>
    </section>
  );
}
