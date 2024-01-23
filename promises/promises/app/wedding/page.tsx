"use client";
import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import { StevenAndJoie, WeddingPackages } from "@/contants";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromBottom, slideInFromRight } from "@/utils/motion";

const WeddingPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="w-screen flexCenter -mt-[90px] flex-col  h-screen ">
      <div className="h-full w-full ">
        {/*Hero Section*/}
        <div className="bg-[url(/WeddingMainPage.webp)] flex justify-center items-center bg-cover bg-center h-[400px] sm:pt-40 lg:pt-0 lg:h-full w-full">
          <div className=" flexEnd  padding-container w-full ">
            <div className="sm:flex  hidden flex-col h-40 text-center">
              <motion.h1
                className="sm:text-7xl lg:text-9xl text-[#40506A] uppercase"
                initial="hidden"
                animate="visible"
                variants={slideInFromRight(0.5)}
              >
                Promises
              </motion.h1>
              <motion.h1
                className="sm:text-4xl lg:text-7xl text-[#40506A] uppercase"
                initial="hidden"
                animate="visible"
                variants={slideInFromRight(0.7)}
              >
                Wedding Studio
              </motion.h1>
            </div>
          </div>
        </div>

        {/*BTN Section */}
        <section className="h-[200px] relative flex justify-center padding-container w-full   ">
          <div className="absolute w-full h-[10px] flex justify-center items-center">
            <Button title="Find A Date" />
          </div>

          <div className=" flex justify-center text-center items-center h-full">
            <p className="text-[#40506A]">
              A dedicated studio specializing in creatively detailing your love
              story
            </p>
          </div>
        </section>

        {/*Video Section*/}
        <section className="h-full w-full  flex flex-col justify-center gap-10 padding-container ">
          <div className="w-full h-full  ">
            {/* Put Video here*/}
            <Image
              src={"/PlaceholderPic.png"}
              height={"100"}
              width={"100"}
              alt="PlacholderPic"
              className="h-full w-full"
            />
          </div>

          <div className="  flex justify-center ">
            <p className=" w-full max-w-[550px] h-auto  flex justify-center text-center">
              With our team of skilled photographers and videographers, we
              creatively reflect the magic, the joy, and the love that defines
              the day you say “I do”
            </p>
          </div>
        </section>

        {/*Video Clip Section*/}
        <section className="h-full w-full  py-10 ">
          <Image
            src={"/PlacehodlerPic2.png"}
            width={100}
            height={100}
            alt="PLaceholder_Container"
            className="h-full w-full"
          />
        </section>

        {/*Gino Pic Section*/}
        <section className="w-full h-auto padding-container flex md:flex-row flex-col-reverse justify-center bg-[#F3F8FF]  py-10 ">
          {/*Left Div - Image Container */}
          <div className=" ">
            <img
              src="/GinoAndBea.webp"
              alt="section_WeddingPic"
              className="h-full w-full object-cover"
            />
          </div>

          {/*Right Div*/}
          <div className="  flex flex-col  gap-10">
            <div className="   flex justify-center items-center py-5 w-full text-center text-[#40506A]">
              <h1 className="font-bold sm:text-2xl  max-w-[430px] lg:text-4xl">
                {" "}
                Your Wedding day is one of the most important days of your life
              </h1>
            </div>

            <div className="  text-center flex h-full  justify-center items-center text-[#40506A]">
              <p className="max-w-[430px] sm:text-2xl lg:text-2xl ">
                {" "}
                That&apos;s why we deliver top-tier photography and videography
                services to ensure that your cherished memories last a lifetime
              </p>
            </div>
          </div>
        </section>

        {/*Watch Love Stories */}
        <section className="w-full h-auto bg-[#D1AF70] padding-container flex justify-center items-center">
          <div className="padding-container flex flex-col justify-center items-center gap-10 py-10">
            <h1 className="text-white text-2xl">
              At Promises, we capture the moments of today that will melt your
              heart tomorrow
            </h1>
            <div className="">
              <Button title="Watch our Love Stories" />
            </div>
          </div>
        </section>

        <section className="w-full h-auto padding-container  py-10 ">
          <div className="flex flex-col">
            {StevenAndJoie.map((list, index) => (
              <div
                className={`  flex ${
                  index === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } flex-col-reverse justify-center items-center`}
                key={index}
              >
                <div className=" padding-container py-10 gap-5  flex flex-col">
                  <div className=" flex max-w-[300px] text-center ">
                    <motion.h1
                      className="text-3xl text-[#40506A]"
                      ref={ref}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={slideInFromBottom(0.5)}
                    >
                      {list.description}
                    </motion.h1>
                  </div>
                  <div className=" flex max-w-[300px] justify-center ">
                    <motion.p
                      className="text-2xl"
                      ref={ref}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={slideInFromBottom(0.7)}
                    >
                      {list.title}
                    </motion.p>
                  </div>
                  <div className=" flex max-w-[300px] text-center justify-center ">
                    <motion.p
                      className="text-[#D1AF70] text-2xl"
                      ref={ref}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={slideInFromBottom(0.9)}
                    >
                      {list.link}
                    </motion.p>
                  </div>
                </div>
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromBottom(0.5)}
                >
                  <img
                    src={list.img}
                    alt="steven_joie_pic"
                    className="md:h-[500px] object-cover h-[350px]"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/*Packages Section*/}
        <section className="bg-[url(/WeddingWhiteBg.webp)] w-full h-auto   bg-cover bg-center  padding-container">
          <div className="flex flex-col w-full justify-center items-center  ">
            <div className=" pt-20 flex  flex-col gap-10  text-center text-[#40506A]">
              <h1 className="text-2xl lg:text-4xl">Wedding Packages</h1>
              <p className="max-w-[700px]">
                Choose from our range of wedding photography packages, each
                designed to suit different styles and preferences. Whether
                it&apos;s a grand celebration or an intimate ceremony,
                we&apos;re here to document every moment
              </p>
            </div>
            {/*Packages List*/}
            <div className="  ">
              <div className=" flex flex-row flex-wrap gap-3 justify-center h-auto pt-10 lg:pt-20  max-w-[1000px]   ">
                {WeddingPackages.map((packages, index) => (
                  <div
                    className={`py-5  w-full px-5 gap-5 justify-between items-center shadow-custom flex flex-col ${
                      index < 3
                        ? " flex-basis: calc(33.333% ) w-full max-w-[320px]"
                        : "flex-basis: calc(50% - 8px) w-full max-w-[320px]"
                    } `}
                    key={index}
                  >
                    <div className="h-full text-center  ">
                      <div className=" py-10">
                        <h1 className="text-2xl">{packages.title}</h1>
                      </div>
                    </div>

                    <div className="flex flex-col h-full  text-center ">
                      {packages.inclusions.map((packageList, index) => (
                        <div className="" key={index}>
                          <p className=" text-md">{packageList.title}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col justify-center items-center">
                      <h1 className="font-bold text-2xl">
                        Introductory Price:
                      </h1>
                      <p className="font-xl">{packages.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*Booking Sub-section */}
          <div className="  w-full flex flex-col justify-center items-center gap-10 py-[10px] lg:py-[20px] h-auto padding-container ">
            <div className="flex text-center max-w-[450px]">
              <h1 className="text-[#40506A] text-2xl ">
                {" "}
                Book your exclusive consultation now, and let us turn your
                special day into a masterpiece of memories.
              </h1>
            </div>

            <div className="  w-full flex justify-center">
              <div className="max-w-[400px] flex   justify-center">
                <Button title="Schedule a Consultation" />
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    </section>
  );
};

export default WeddingPage;
