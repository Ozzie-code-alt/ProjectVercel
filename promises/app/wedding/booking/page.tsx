import BookingForm from "@/components/BookingForm";
import { ConsultationProces } from "@/contants";
import React from "react";
import Footer from "@/components/Footer";

const Bookingpage = () => {
  return (
    <section className="sectionPage flexCenter -mt-[90px] flex-col border border-red-500">
      {/*Hero Section Container*/}
      <div className="padding-container py-20  lg:py-40 border w-full border-blue-500 text-center gap-5 flex-col flex lg:gap-10">
        <div>
          <h1 className="text-2xl lg:text-7xl pt-10 text-[#40506A] uppercase">
            Secure A Date
          </h1>
        </div>
        <div>
          <p className="text-sm lg:text-2xl">
            Never leave your stories untold. Schedule a free consultation, and
            lets tell your love story with our lenses.
          </p>
        </div>
      </div>

      {/*Section 2 - Free Consultation Section*/}
      <div className=" pb-10 lg:pb-20 h-auto w-full padding-container  shadow-xl flex flex-col  bg-white ">
        {/*Upper Container - Free Consultation */}
        <div className="flex flex-col py-10 lg:py-20 gap-5 lg:gap-10 justify-center items-center">
          <h1 className="text-2xl lg:text-7xl pt-10 text-[#40506A] uppercase">
            Free Consultation
          </h1>
          <p className="text-sm lg:text-2xl max-w-[700px] text-center">
            Just like your first meeting, we&apos;re excited to get to know you!
            That&apos;s why we always start our photoshoots with a FREE consultation,
            to make sure we&apos;re a great match for each other.
          </p>
        </div>

        {/* Lower Container - Date and Instructions*/}
        <div className=" md:flex-row flex flex-col-reverse gap-10 padding-container justify-center border border-red-500 items-center">
          <div className="max-w-[400px] gap-10 flex sm:pb-10 flex-col border  border-yellow-500">
            <div className="flexStart text-2xl font-bold text-[#40506A] ">
              During Your Consult:
            </div>

            <div className="pb-5 ">
              {ConsultationProces.map((list, index) => (
                <div className=" " key={index}>
                  <h1 className="mb-6 md:mb2">
                    {list.process} <br />
                  </h1>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col  gap-11 border border-blue-500">
            <div className="text-center">
              <h1 className="text-2xl text-[#40506A] font-bold ">SELECT A DATE</h1>
            </div>
            <BookingForm sourcePage="Creative" />
          </div>
        </div>
      </div>

      <Footer/>
    </section>
  );
};

export default Bookingpage;
