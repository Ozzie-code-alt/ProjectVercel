"use client";
import React from "react";
import Button from "@/components/Button";
import { PromisesKept } from "@/contants";
import Footer from "@/components/Footer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { string } from "zod";

const PortfolioPage = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedImageLinks, setSelectedImageLinks] = React.useState([]);

  const handleItemClick = (imageLinks:any) => {
    setSelectedImageLinks(imageLinks);
    setOpen(true);
  };

  const slides = selectedImageLinks.map(link => ({ src: (link as any).img }));

  return (
    <section className=" w-screen -mt-[90px] flex-col  h-screen ">
      {/*Hero Section*/}
      <section className="w-full h-auto lg:h-full">
        <div className="bg-[url(/PortfolioHero.webp)] flex justify-center items-center bg-cover bg-center h-[400px] sm:pt-40 lg:pt-0 lg:h-full w-full">
          <div className="flexStart padding-container w-full ">
            <div className="lg:flex gap-5 hidden flex-col h-40 text-center">
              <h1 className="lg:text-5xl xl:text-9xl text-white upercase transition duration-500 ease-in-out hover:text-promises-gold cursor-default">Portfolio</h1>
              <p className="text-white text-2xl max-w-[350px]">
                Explore our portfolio to see some of the magic we&apos;ve made.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*Find a Date Button */}
      <section className="relative w-full flex flex-col  gap-10  h-[10px] py-60 lg:py-0  justify-center items-center ">
        <h1 className="text-8xl lg:hidden  text-[#40506A]">Portfolio</h1>
        <Button title="Find A Date" />

        {/*Sectoin 2 Invisible- Large Viewport */}
        <div className="flex flex-col gap-5 text-center">
          <div>
            <h1 className="text-2xl lg:hidden font-bold">
              Heartwarming, Beautiful, and Professional
            </h1>
          </div>
          <div className=" padding-container">
            <p className=" lg:hidden ">
              From the moment you connect with us, you&apos;ll feel like how a couple
              in love should as you&apos;ll find that every moment is designed to
              make you feel the warmth, excitement, and joy that a couple deeply
              in love should.{" "}
            </p>
          </div>
        </div>
      </section>


      {/*Section 2 */}
      <section className="w-full h-auto lg:h-full">
        <div className="bg-[url(/PortfolioPic2.webp)] flex justify-center items-center bg-cover bg-center h-[400px] sm:pt-40 lg:pt-0 lg:-mt-3 lg:h-full w-full">
          <div className="flexStart padding-container w-full ">
            <div className="lg:flex  hidden flex-col text-center justify-center h-auto gap-5 px-10 py-10 bg-white/50 ">
              <h1 className=" lg:text-6xl max-w-[900px] text-left font-bold text-[#40506A]">
                Heartwarming, Beautiful, and Professional
              </h1>
              <p className="lg:text-[30px] text-left text-[#40506A]  max-w-[550px]  ">
                From the moment you connect with us, you&apos;ll feel like how a
                couple in love should as you&apos;ll find that every moment is
                designed to make you feel the warmth, excitement, and joy that a
                couple deeply in love should
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*Promises Kept Page - Section 3 */}
      <section className="bg-[url(/WeddingWhiteBg.webp)] border flex flex-col padding-container  w-full h-auto">
        {/*upper Div */}
        <div className="border flex flex-col gap-10 lg:gap-20 justify-center items-center text-center  py-10 lg:py-15">
          <h1 className="text-[#40506A] text-5xl uppercase ">Promises Kept</h1>

          <div className="text-2xl max-w-[600px]">
            <p>
              Our skilled production team not only guarantees perfection but
              also captures the unique essence and emotions of your
              one-of-a-kind moments.
            </p>
          </div>
        </div>
        {/*Sub Section - Promises Kept */}
        <div className=" w-full padding-container y-5 lg:py-10 flex flex-col items-center border">
          {PromisesKept.map((list, index) => (
            <div
              key={index}
              className="border w-full p-5 px-10  mb-10 gap-5 justify-center items-center shadow-custom flex flex-col-reverse md:flex-row"
              onClick={() => handleItemClick(list.imageLink)}
            >
              {/*Description*/}
              <div className="flex w-full pr-5 lg:pr-10gap-5 justify-center items-center  lg:gap-10 flex-col">
                <div className="flex flex-col gap-3 justify-center items-center ">
                  <h1 className="text-4xl xl:text-7xl text-[#40506A]">{list.title}</h1>
                  <h1 className="text-2xl xl:text-3xl text-[#40506A]">{list.description}</h1>
                </div>
                {/*Love Story Link */}
                <div>
                  <button onClick={() => setOpen(true)} className="text-[#D1AF70] sm:text-2xl">{list.link}</button>
                </div>
              </div>
              {/*Image*/}
              <div className="w-full flexEnd">
                <img
                  src={list.img}
                  alt="PromisesKeptImage"
                  className="promises-kept-image"
                />
              </div>
            </div>
          ))}

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
          />
        </div>
        {/*Schedule a Consultation*/}
        <div className="border w-full flex flex-col justify-center py-10 gap-10 lg:gap-20  lg:py-20 items-center padding-container ">
          <div className="max-w-[500px] text-center">
            <p className=" text-[#40506A] text-2xl">
              {" "}
              Book your exclusive consultation now, and let us turn your special
              day into a masterpiece of memories.{" "}
            </p>
          </div>
          <div>
            <Button title="Schedule a Consultation" size="w-[500px]" />
          </div>
        </div>

        <Footer />
      </section>
    </section>
  );
};

export default PortfolioPage;
