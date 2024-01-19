import React, { useState } from "react";
import Modal from "react-modal";
import { FormField, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Puff } from "react-loader-spinner";
import { VscChromeClose } from "react-icons/vsc";
import ComboBoxWedding from "./ComboBoxWedding";
import ComboBoxCreatives from "./ComboBoxCreatives";

interface BookingModalInfoProps {
  onPackageSelect: (selectedPackage: string) => void;
  isOpen: boolean;
  isClose: () => void;
  form: {
    handleSubmit: (
      callback: (data: any) => void
    ) => (e: React.FormEvent<HTMLFormElement>) => void;
    getValues: () => Record<string, any>; // Add getValues method
    control: any;
  };
  onsubmit: (data: any) => void;
  onLoading: boolean;
  sourcePageContainer: string;
}

const BookingModalInfo = ({
  isOpen,
  isClose,
  form,
  onsubmit,
  onLoading,
  sourcePageContainer,
  onPackageSelect,
}: BookingModalInfoProps) => {
  const [selectedPackage, SetSelectedPackage] = useState("");
  const [packageError, setPackageError] = useState(""); // New state for package error

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if a package is selected
    if (!selectedPackage) {
      setPackageError("Please select a package");
      return;
    }

    setPackageError("");

    onsubmit({ ...form.getValues(), selectedPackage });
    // form.handleSubmit(onsubmit)(e);
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={isClose}
        style={{
          content: {
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            border: "none",
            borderRadius: "12px",
            maxWidth: "500px", // Maximum width of the modal
            width: "80%", // Responsive width
            height: "50%", // Height of the modal
            margin: "auto", // Centers the modal
          },
        }}
      >
        <div className="flex w-full justify-between text-xl">
          <div className="mb-2">
            <h1>Information Details</h1>
          </div>
          <div className="flex flex-row-reverse pb-2">
            <button onClick={isClose}>
              <VscChromeClose />
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200 pb-4"></div>

        <form onSubmit={handleFormSubmit} className="space-y-8">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              // Field rendering logic
              <Input {...field} type="text" placeholder="Name" required />
            )}
          />
          {/* Contact Info Field */}
          <FormField
            control={form.control}
            name="contactInfo"
            render={({ field }) => (
              // Field rendering logic
              <Input
                {...field}
                type="text"
                placeholder="Contact Info"
                required
                pattern="^09\d{9}$"
                title="Must start with 09 and be 11 digits long"
              />
            )}
          />
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              // Field rendering logic
              <Input {...field} type="email" placeholder="Email" required />
            )}
          />

          {sourcePageContainer === "Wedding" ? (
            <ComboBoxWedding
              onSelect={(value: string) => {
                SetSelectedPackage(value);
                setPackageError("");
                onPackageSelect(value);
              }}
            />
          ) : (
            // <DropDownInfo
            // onSelect={(value: string) => {
            //   SetSelectedPackage(value);
            //   setPackageError("");
            //   onPackageSelect(value);
            // }}

            // />
            <ComboBoxCreatives
              onSelect={(value: string) => {
                SetSelectedPackage(value);
                onPackageSelect(value);
                setPackageError("");
              }}
            />
          )}
          {packageError && (
            <div className="text-red-500 text-sm ">{packageError}</div>
          )}

          {onLoading ? (
            <Puff height={50} color="#D1AF70" />
          ) : (
            <div className="justify-end flex ">
              <Button type="submit">{"Submit"}</Button>
            </div>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default BookingModalInfo;
