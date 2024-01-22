"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SplitScreenSlider = () => {
  const [dividerPosition, setDividerPosition] = useState(50); // Default position at 50%
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const expandLeft = () => {
    if (!isMobile) {
      setDividerPosition(70); // Expand left side to 70%
    }
  };

  const expandRight = () => {
    if (!isMobile) {
      setDividerPosition(30); // Expand right side to 30%
    }
  };

  const resetDivider = () => {
    if (!isMobile) {
      setDividerPosition(50); // Reset to 50%
    }
  };

  const leftSideExpanded = dividerPosition > 50;
  const rightSideExpanded = dividerPosition < 50;

  const isMiddle = dividerPosition === 50;
  const leftSideTextStyle = `${
    rightSideExpanded
      ? "text-4xl"
      : "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 4xl:text-[120px]"
  }  font-koulen`;
  const rightSideTextStyle = `${
    leftSideExpanded
      ? "text-4xl"
      : "text-3xl sm:text-4xl lg:text-5xl xl:text-7xl 4xl:text-[120px]"
  } font-koulen`;

  const customCursorStyle = {
    cursor: `url('/cursor.png'), auto`, // Replace with the path to your cursor image
  };

  return (
    <div
      className="relative w-full h-screen flex flex-col md:flex-row md:overflow-hidden"
      style={customCursorStyle}
    >
      {/* Left side */}
      <div
        onMouseEnter={expandLeft}
        onMouseLeave={resetDivider}
        style={{
          width: isMobile ? "100%" : `${dividerPosition}%`,
          height: "50%",
          transition: "width 0.5s ease-in-out", // Added transition
        }}
      >
        {/* <img className='w-full h-full object-cover'  src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'/> */}

        <Link href={"/wedding"}>
          <div
            className={`h-screen bg-[url('/GinoBeaBG.webp')] bg-center bg-no-repeat bg-cover w-full ${
              isMobile ? "flex justify-center items-center bg-center bg-no-repeat bg-cover" : ""
            }`}
          >
              {/* <div className="bg-[url('/Gino_Bea_bg.webp')] h-full  "> */}

             

            <div className="h-full flex flex-col place-content-between group w-full relative">
              <div
                className={`absolute top-0 w-full flex justify-center items-center text-center ${
                  isMobile ? "h-[50%] " : ""
                }`}
              >
                {/* <div className="md:hidden flex justify-end sm:pt-0 ">
                  <Image
                    src={"/studioside1.webp"}
                    height={100}
                    width={250}
                    alt="Promises"
                    className="hover:scale-110 transition-transform duration-300 absolute bottom-0 left-0"
                  />
                </div> */}
                {/* <div className="flex w-full h-full justify-center h-[70%]">
                  <h1
                    className={`${leftSideTextStyle} mt-5 font-caudex font-bold absolute z-10`}
                  >
                    Your love stories <br /> through our lens
                  </h1>
                </div> */}
                <div className="flex w-full h-full flex-col items-center h-[70%]">
                  {/* <button type="button" className="flex md:hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 text-center mb-2 mt-6 opacity-80 shadow-2xl"> */}
                  <button
                    type="button"
                    className="flex md:hidden mt-10 text-black  bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    {/* <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> */}
                    {/* <button type="button" className="bg-white/20 p-1 rounded-lg"> */}
                    {/* <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> */}
                    {/* <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"> */}

                    <h1
                      className={`${rightSideTextStyle} text-black z-10 opacity-100`}
                    >
                      Make a promise timeless
                    </h1>
                  </button>
                  <h1
                    className={`${rightSideTextStyle} mt-5 z-10 hidden md:flex`}
                  >
                    Make a promise timeless
                  </h1>
                  <div className="absolute md:hidden hover:scale-110 transition-transform duration-300 bottom-0">
                    <Image
                      src={"/studioside1.webp"}
                      height={50}
                      width={150}
                      alt="Creatives"
                      className="sm:w-[350px]"
                    />
                  </div>
                </div>
              </div>
              <div
                className={` ${
                  isMobile ? "hidden" : ""
                } flex flex-row justify-center h-full`}
              >
                <div className="flex justify-end items-end">
                  <Image
                    src={"/studioside1.webp"}
                    height={100}
                    width={500}
                    alt="Promises"
                    className=" md:hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {leftSideExpanded && (
                  <div className="flex flex-col justify-end">
                    <div className="pt-16 h-58 w-72 text-center flex items-center justify-center bg-slate-100 rounded-lg p-5">
                      <h1 className="font-koulen text-5xl">
                        {`LET'S START WITH A DATE`}
                      </h1>
                    </div>
                    <div className="flex flex-row font-black text-2xl bg-black text-promises-gold h-24 rounded-md justify-center mb-5">
                      <button className="text-uppercase">
                        FREE CONSULTATION
                      </button>
                    </div>
                  </div>
                )}
              </div>
              </div>
            </div>
         
        </Link>
      </div>

      <div
        className="absolute inset-y-0 bg-transparent cursor-col-resize flex justify-center items-center"
        style={{
          left: `${dividerPosition}%`,
          transition: "left 0.5s ease-in-out", // Added transition for the horizontal movement
        }}
      >
        {/* This is the draggable divider with a circle in the middle */}
        <div className="w-2 h-full relative">
          <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 rounded-full w-64 flex items-center justify-center">
            {/* Center circle */}
            <img src="/Promises_MiddleLogo.png" className="w-full h-full" />
          </div>
        </div>
      </div>

      <div
        onMouseEnter={expandRight}
        onMouseLeave={resetDivider}
        style={{
          width: isMobile ? "100%" : `${100 - dividerPosition}%`,
          transition: "width 0.5s ease-in-out", // Added transition,
        }}
        className="h-full"
      >
        <Link href={"/creative"}>
          <div
            className={`h-full flex justify-center items-center  bg-[url('/ailabg.webp')] bg-cover overflow-hidden w-full ${
              isMobile ? "flex justify-center items-center" : ""
            }`}
          >
            <div className="h-full w-full flex flex-col justify-center items-center place-content-between text-slate-100 relative">
              <div
                className={`flex absolute top-0 w-full justify-center items-center  text-center ${
                  isMobile ? "h-full" : ""
                }`}
              >
                <div className="flex w-full h-full flex-col items-center justify-start h-[70%]">
                  <button
                    type="button"
                    className="flex md:hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 text-center mb-2 mt-24"
                  >
                    {/* <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> */}
                    {/* <button type="button" className="bg-white/20 p-1 rounded-lg"> */}
                    <h1
                      className={`${rightSideTextStyle} text-black z-10 opacity-100`}
                    >
                      Be the star you are!
                    </h1>
                  </button>

                  <h1
                    className={`${rightSideTextStyle} mt-5 z-10 hidden md:flex`}
                  >
                    Be the star you are!
                  </h1>
                  <div className="absolute md:hidden hover:scale-110 transition-transform duration-300 bottom-0">
                    <Image
                      src={"/aila.webp"}
                      height={50}
                      width={150}
                      alt="Creatives"
                      className="sm:w-[350px]"
                    />
                  </div>
                </div>
              </div>

              <div
                className={` ${
                  isMobile ? "hidden" : ""
                } flex flex-row items-end h-full`}
              >
                {rightSideExpanded && (
                  <div className="flex flex-col justify-end">
                    <div className="pt-16 h-58 w-72  text-center text-white flex items-center justify-center bg-gray-900 rounded-lg p-5">
                      <h1 className="font-koulen text-5xl">
                        I’m ready to strike a pose
                      </h1>
                    </div>
                    <div className="flex flex-row font-black text-2xl bg-slate-100 text-black h-24 rounded-md justify-center mb-5">
                      <button className="text-uppercase">
                        FREE CONSULTATION
                      </button>
                    </div>
                  </div>
                )}
                <div className="hidden md:flex justify-end items-end h-full hover:scale-110 transition-transform duration-300">
                  <Image
                    src={"/aila.webp"}
                    height={100}
                    width={500}
                    // objectFit="contain"
                    // layout="fill"
                    alt="Creatives"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SplitScreenSlider;