"use client";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  contact: z.string().min(11),
  email: z.string().min(2).max(50),
  subject: z.string().optional(),
  message: z.string(),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    //Submit Here
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-y-6 w-full flex-col items-center justify-center"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="m-2 sm:text-3xl">
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Input Name"
                  {...field}
                  className="text-black border-[#667080] rounded-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem className="m-2 sm:text-3xl">
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Input Mobile Number"
                  {...field}
                  className="text-black border-[#667080] rounded-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="m-2 sm:text-3xl">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Input Email"
                  {...field}
                  className="text-black border-[#667080] rounded-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="m-2 sm:text-3xl">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Enter Your Message"
                  className="text-black border-[#667080] rounded-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center mt-10">
          <Button
            type="submit"
            variant={"promises_1"}
            className="text-2xl font-black rounded-md px-12"
          >
            SUBMIT
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
