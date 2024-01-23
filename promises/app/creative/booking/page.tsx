import CreativeNavbar from "@/components/CreativeNavbar";

import BookingForm from "@/components/BookingForm";
const CreativeBooking = () => {
  return (
    <section>
      <CreativeNavbar textColor="white"></CreativeNavbar>
      <div className="bg-[url(/contactSchedule.webp)] border border-yellow-500 padding-container flex justify-center items-center w-full h-screen bg-center bg-cover">
        {" "}
        <div className=" md:flex-row flex flex-col gap-10 padding-container justify-center border  border-green-500 h-auto items-center">
          <div className="max-w-[800px]  padding-container gap-10 flex sm:pb-10 flex-col border  justify-center items-center  ">
            <div className=" text-2xl max-w-[450px] lg:text-5xl flex border border-blue-500 justify-center items-center text-4xl font-bold text-center uppercase text-promises-gold ">
              <h1>Limited spots available</h1>
            </div>
            <p className="border border-blue-500 max-w-[850px] text-xl md:text-5xl text-center ">
              Hurry! Making your dream photoshoot means taking the time and care
              to know about you and your story. That's why we always start our
              photoshoots with a FREE consultation.
            </p>
          </div>

          <div className="flex flex-col  gap-11 border justify-center items-center">
            <div className="text-center">
              <h1 className=" text-2xl lg:text-5xl text-promises-gold font-bold ">
                SELECT A DATE
              </h1>
            </div>

            <div className="w-fit">
              <BookingForm sourcePage="Creative" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black h-auto border sm:py-10 py-20 border-yellow-500 padding-container">
        <div className="border border-blue-500 h-full text-center justify-center items-center flex flex-col gap-10  lg:gap-60">
          <h1 className="text-4xl lg:text-7xl text-promises-gold  ">
            During Your Consult:
          </h1>
          <p className="text-2xl max-w-[800px] leading-loose  md:leading-[100px] ">
            You will be spending 30-minutes on a video call with our Studio
            Manager. Find out about you and what you're looking for (it's okay
            if you don't know yet because that's why we're here!) Find you the
            next available photoshoot date availability and get you booked in
            with your deposit
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreativeBooking;
