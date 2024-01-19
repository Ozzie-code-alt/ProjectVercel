"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { NavbarList } from "@/contants";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const WeddingNavbar = () => {
  return (
    <section className="w-screen z-[1] relative bg-white lg:bg-transparent  h-auto">
      <div className="px-3 md:px-10 pt-7 pb-3">
        <Link href={"/wedding"}>
        
        <img
          src="/MainLogoHeader.webp"
          className="flexStart w-[150px]"
          alt="Main_Logo"
        />
        </Link>
      </div>
      <div className="w-auto flexEnd  px-10  ">
        <div className="flex absolute top-0 flex-row w-auto border px-3 bg-white shadow-2xl rounded-xl">
          {NavbarList.map((list, index) => (
            <div className="bg-white cursor-pointer" key={index}>
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

        <div className="flex lg:hidden absolute top-0 w-auto  gap-10 px-5 py-4 mt-4 md:px-10 md:py-6 md:mt-0 rounded-xl ">
          <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
              </SheetHeader>

              {NavbarList.map((list, index) => (
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
      </div>
    </section>
  );
};

export default WeddingNavbar;
