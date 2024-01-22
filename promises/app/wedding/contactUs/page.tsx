import ContactForm from "@/components/ContactForm";
import dynamic from "next/dynamic";
import React from "react";
import Footer from "@/components/Footer";
const ContactUs = () => {
  const Contactmap = dynamic(() => import('@/components/Map'), { ssr: false })
  return (
    <section className="w-full h-auto border   bg-cover bg-center -mt-[90px]  bg-[url(/WeddingWhiteBg.webp)]  ">
      {/*Section 1 - Hero Page */}
      <div className="padding-container py-20  lg:py-40 border w-full text-center gap-5 flex-col flex lg:gap-10">
        <h1 className="text-2xl lg:text-7xl pt-10 text-[#40506A] transition duration-500 ease-in-out hover:text-promises-gold cursor-default">
          CONTACT US
        </h1>
        <p className="text-sm lg:text-2xl">
          and be ready to receive the best experience you&apos;ll ever get!{" "}
        </p>
      </div>

      {/*Section 2 -Contact Form */}
      <section className="w-full h-auto border bg-white shadow-custom flex flex-col justify-center  ">
        <div className="border w-full py-10 px-2 md:px-40 ">
          <ContactForm />
        </div>


        <div className=" w-full flex flex-col  md:flex-rows  lg:py-20 justify-center items-center padding-container  ">
          {/*Left Div */}
          <div className="w-full z-[0]">
            <Contactmap />
          </div>
          {/*Right Div */}
          <div className="padding-container flex gap-10 py-10 lg:gap-20 flex-col border">
            <h1 className="text-2xl lg:text-5xl text-[#40506A] font-bold">Our Location</h1>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl lg:text-5xl text-[#40506A] font-bold">Address</h1>
              <p className="text-lg lg:text-2xl text-[#40506A]">
                Daily Guardian Center, Guzman-Jesena Streets, Mandurriao Iloilo
                City, Iloilo City, Philippines
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </section>
  );
};

export default ContactUs;
