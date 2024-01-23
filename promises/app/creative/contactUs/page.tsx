import ContactForm from "@/components/ContactForm";
import CreativeNavbar from "@/components/CreativeNavbar";

import dynamic from "next/dynamic";
const CreativeContacUs = () => {

  const ContactMapNoSSR = dynamic(()=> import('@/components/Map'),{ssr:false})
  return (
    <section className="h-auto  border border-red-500 w-screen ">
      <CreativeNavbar textColor="white"></CreativeNavbar>
      <div className="border border-blue-500 bg-[url(/contactCreatives.webp)] w-full bg-center flex justify-center items-center flex-col bg-cover h-auto">
        <div className="w-full md:flexCenter xl:flexEnd padding-container ">
          <div className="w-fit gap-10 max-w-7xl flex flex-col border border-yellow-500">
            <h1 className="text-2xl lg:text-7xl pt-10 hover:text-[#40506A] transition w-full flex justify-center items-center duration-500 ease-in-out text-promises-gold cursor-default">
              Contact Us
            </h1>
            <p className="text-sm lg:text-2xl w-full flex max-w-[500px] justify-center items-center">
              Don&apos;t be shy! We&apos;d love to hear about your vision and make it into
              reality.
            </p>

            <div className="border border-red-500 w-full flex justify-center items-center">
              <div className="border border-blue-500 w-fit">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        <div className="border border-red-500 w-full flex flex-col  md:flex-row  lg:py-20 justify-center items-center padding-container  ">
          {/*Left Div */}
          <div className="w-full z-[0]">
            <ContactMapNoSSR />
          </div>
          {/*Right Div */}
          <div className="padding-container flex gap-10 py-10 lg:gap-20 flex-col border">
            <h1 className="text-2xl lg:text-5xl text-promises-gold font-bold">
              Our Location
            </h1>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl lg:text-5xl text-promises-gold font-bold">
                Address
              </h1>
              <p className="text-lg lg:text-2xl text-white">
                Daily Guardian Center, Guzman-Jesena Streets, Mandurriao Iloilo
                City, Iloilo City, Philippines
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeContacUs;
