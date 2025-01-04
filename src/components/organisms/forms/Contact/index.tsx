import { ButonLinkSecondary } from "@/components/atoms/ButtonLink";
import Input from "@/components/atoms/Input";
import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-4 bg-CareerCraftForeGround p-4 rounded-lg shadow-lg">
      <div className="flex gap-4 ">
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="firstName"
          >
            First Name
          </label>
          <Input
            className="rounded-md"
            placeholder="Enter your first name"
            name="firstName"
            //   className="w-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <Input
            className="rounded-md"
            placeholder="Enter your last name"
            name="lastName"
            //   className="w-full"
          />
        </div>
      </div>

      <div className="md:flex-row flex flex-col gap-4 ">
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="city"
          >
            City
          </label>
          <Input className="rounded-md" placeholder="City" name="city" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="state"
          >
            State
          </label>
          <Input
            className="rounded-md"
            placeholder="State/Province"
            name="state"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="zipcode"
          >
            Zip Code
          </label>
          <Input
            placeholder="Zip Code"
            name="zipcode"
            className="rounded-md"
            //   className="w-full"
          />
        </div>
      </div>

      <div className="flex gap-4 ">
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="phone"
          >
            Phone
          </label>
          <Input
            placeholder="Phone"
            name="phone"
            className="rounded-md"
            //   className="w-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="email"
          >
            Email
          </label>
          <Input
            placeholder="Email"
            name="email"
            className="rounded-md"
            //   className="w-full"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <ButonLinkSecondary
          text="Save & Continue"
          class="bg-CareerCraftPrimary hover:bg-CareerCraftPrimaryDark text-CareerCraftWhite"
          href="/experience"
        ></ButonLinkSecondary>
      </div>
    </div>
  );
};

export default ContactForm;
