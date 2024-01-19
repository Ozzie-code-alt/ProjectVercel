import React from "react";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <section className="bg-transparent  py-10 lg:pt-20  w-full h-auto  padding-container">
      <div className="flex flex-col md:flex-row text-center  gap-10 lg:gap-20 justify-between items-center ">
        {/*Left Div*/}
        <div className="hidden  md:block">
          <img src="/MainLogoHeader.webp" />
        </div>
        {/*CenterDiv*/}
        <div className="lg:mr-52 flex flex-col py-5  gap-5 lg:gap-10  lg:justify-center lg:items-center ">
          <div className="flex flex-col md:flex-row gap-5 lg:gap-10">
            <h1 className="text-[#6B6B6B]">Home</h1>
            <h1 className="text-[#6B6B6B]">Porfolio</h1>
            <h1 className="text-[#6B6B6B]">Contact Us</h1>
          </div>
          <div>
            <p className="text-[#6B6B6B] text-sm">© Promises. ALL RIGHTS RESERVED. ALL OF Promises&apos;s CONTENT IS COPYRIGHTED.</p>
          </div>
        </div>
        {/*Right Div*/}
        <div className="flex flex-row justify-center items-center">
          <ul className="flex gap-5 lg:gap-7">
            <li>
              <Link href={"https://www.facebook.com/promisesstudios"}>
              
              <FaFacebook size={30} color="#6B6B6B" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
