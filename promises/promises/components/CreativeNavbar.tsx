import { CreativeList } from '@/contants';
import Link from 'next/link';
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { MdMenu } from "react-icons/md";

// Define the type for the props
type NavbarProps = {
  textColor: string; // Tailwind CSS class for text color
  hide?: string
};

const CreativeNavbar = ({ textColor,hide }: NavbarProps) => {
  return (
    <section className={` flex justify-between relative ${textColor}`} >
      <div className="px-3 md:px-10 pt-7 pb-3">
        <Link href={"/creative"}>
        
        <img
          src="/CreativeLogoHeader.webp"
          className={`flexStart w-[150px]  ${hide}`}
          alt="Creative_Logo"
        />
        </Link>
      </div>

      <div className='flex w-auto px-10'>
      {CreativeList.map((list, index) => (
            <div className="" key={index}>
              {" "}
              {/*Add Link here */}
              <ul className="hidden lg:flex flex-row w-auto lg:gap20 px-5 py-7 ">
                <Link href={list.Link}>
                  <li>{list.title}</li>
                </Link>
              </ul>
            </div>
          ))}
      </div>

      <div className="flex lg:hidden w-auto gap-10 px-5 py-4 mt-4 md:px-10 md:py-6 md:mt-0 rounded-xl ">
          <Sheet>
            <SheetTrigger> <MdMenu size={30} className='text-white'/> </SheetTrigger>
            <SheetContent className='bg-white w-auto h-[50%]'>
              <SheetHeader>
                <SheetTitle></SheetTitle>
              </SheetHeader>

              {CreativeList.map((list, index) => (
                <div className="bg-white" key={index}>
                  {" "}
                  {/*Add Link here */}
                  <ul className="flex flex-col w-auto lg:gap20 px-5 py-7 ">
                    <Link href={list.Link}>
                      <li>{list.title}</li>
                    </Link>
                  </ul>
                </div>
              ))}
            </SheetContent>
          </Sheet>
        </div>

      
    </section>
  );
};

export default CreativeNavbar;