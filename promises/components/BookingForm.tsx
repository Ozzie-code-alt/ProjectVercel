"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { NavigationMenuDemo } from "./BookingOptions";
import BookingModalInfo from "./BookingInfoModal";
interface CalendarFormProps {
  sourcePage: string;
}

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of Booking is required.",
  }),
  appointmentTime: z.string().optional(),
  name: z.string({
    required_error: "Name is required ",
  }),
  contactInfo: z.string({
    required_error: "Contact Info is required",
  }),
  email: z.string({
    required_error: "Email is Required",
  }),
  status: z.string().optional(),
  source: z.string().optional(),
  packageList: z.string().optional(),
});

const BookingForm = ({ sourcePage }: CalendarFormProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [isLoading, setLoading] = useState<boolean>(false);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedPackaged, SetSelectedPackage] = useState("");
  const { toast } = useToast();
  function toUTC(date: Date) {
    return new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
    );
  }

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    const utcDob = data.dob ? toUTC(data.dob) : null;

    const submissionData = {
      ...data,
      dob: utcDob,
      status: data.status || "",
      source: sourcePage,
      packageList: selectedPackaged,
    };
    // console.log(`this is source${source}`)
    // console.log(submissionData);
    console.log(submissionData);
    console.log(`this is packageList Pick ${data.packageList}`);
    console.log(`this is packageList Pick ${selectedPackaged}`);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });
      if (response.ok) {
        setBookingModalOpen(false);
        setModalOpen(false);
        toast({
          title: "Success",
          variant: "success",
          description: "Booking Set Successfully",
        });
      } else {
        toast({
          title: "Failed",
          variant: "destructive",
          description: "Failed to send Information",
        });
      }
    } catch (error) {
      // Handle network errors here
      toast({
        variant: "destructive",
        description: "Network error while sending information",
      });
    }
    setLoading(false);
  }

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="dob"
        render={({ field }) => (
          
            <FormItem className="flex flex-col bg-slate-200 rounded ">
              <Calendar
                className="bg-white text-black  shadow-xl"
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => {
                  const today = new Date();
                  const oneWeekFromToday = new Date();
                  oneWeekFromToday.setDate(today.getDate() + 7);

                  return date < today || date < oneWeekFromToday;
                }}
                initialFocus
                onDayClick={() => {
                  if (sourcePage === "Wedding") {
                    setBookingModalOpen(true);
                  } else if (sourcePage === "Creative") {
                    setModalOpen(true);
                  }
                }}
              />
            </FormItem>
         
        )}
      />
      <FormField
        control={form.control}
        name="appointmentTime"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormControl>
              <NavigationMenuDemo
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                field={field}
                onClick={() => {
                  setBookingModalOpen(true);
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <BookingModalInfo
        isOpen={bookingModalOpen}
        isClose={() => {
          setBookingModalOpen(false);
        }}
        form={form}
        onsubmit={onSubmit}
        onLoading={isLoading}
        sourcePageContainer={sourcePage}
        onPackageSelect={(packageList) => SetSelectedPackage(packageList)}
      />
    </Form>
  );
};

export default BookingForm;
