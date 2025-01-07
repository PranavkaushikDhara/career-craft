"use client";

import { storeContactDetails } from "@/app/(user)/(builder)/contact/action";
import { FormSubmitButton } from "@/components/atoms/Button";
import { ButonLinkSecondary } from "@/components/atoms/ButtonLink";
import Input from "@/components/atoms/Input";
import React, { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import useResumeStore from "@/store/ResumeStore";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { set } from "zod";

const ContactForm: React.FC = () => {
  const [state, formAction] = useActionState(storeContactDetails, undefined);
  const { pending } = useFormStatus();
  const [submitted, setSubmitted] = useState(false);
  const [resumeData, setResumeData] = useState<any>(null);
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const updateContactDetails = useResumeStore.getState().addContact;
    const addFirstName = useResumeStore.getState().addFirstName;
    const addLastName = useResumeStore.getState().addLastName;
    const addAddress = useResumeStore.getState().addAddress;

    const contactDetails = {
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      linkedin: formData.get("linkedin") as string,
      github: formData.get("github") as string,
    };

    updateContactDetails(contactDetails);
    addFirstName(formData.get("firstname") as string);
    addLastName(formData.get("lastname") as string);
    addAddress({
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      country: formData.get("country") as string,
    });

    console.log(useResumeStore.getState());
    setSubmitted(true);
    router.push("/experience"); // Redirect after form submission
  };

  useEffect(() => {
    const storedData = localStorage.getItem("resumeData");
    if (storedData) {
      try {
        setResumeData(JSON.parse(storedData));
      } catch (error) {
        console.error(
          "Failed to parse resume data from sessionStorage:",
          error
        );
        localStorage.removeItem("resumeData");
      }
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-CareerCraftForeGround p-4 rounded-lg shadow-lg"
    >
      <div className="flex gap-4 ">
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="firstname"
          >
            First Name
          </label>
          <Input
            required={true}
            className="rounded-md"
            placeholder="Enter your first name"
            name="firstname"
            value={resumeData?.firstname || ""}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="lastname"
          >
            Last Name
          </label>
          <Input
            required={true}
            className="rounded-md"
            placeholder="Enter your last name"
            name="lastname"
            value={resumeData?.lastname || ""}
          />
        </div>
      </div>

      <div className="flex gap-4 ">
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="github"
          >
            GitHub URL
          </label>
          <Input
            required={false}
            className="rounded-md"
            placeholder="Enter your GitHub URL"
            name="github"
            value={resumeData?.contactDetails.github || ""}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="linkedin"
          >
            Linkedin URL
          </label>
          <Input
            required={false}
            className="rounded-md"
            placeholder="Enter your Linkedin URL"
            name="linkedin"
            value={resumeData?.contactDetails.linkedin || ""}
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
          <Input
            required={true}
            className="rounded-md"
            placeholder="City"
            name="city"
            value={resumeData?.address.city || ""}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="state"
          >
            State
          </label>
          <Input
            required={true}
            className="rounded-md"
            placeholder="State/Province"
            value={resumeData?.address.state || ""}
            name="state"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-CareerCraftWhite text-sm font-medium"
            htmlFor="country"
          >
            Country
          </label>
          <Input
            required={true}
            placeholder="Country"
            name="country"
            value={resumeData?.address.country || ""}
            className="rounded-md"
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
            required={true}
            name="phone"
            value={resumeData?.contactDetails.phone || ""}
            className="rounded-md"
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
            required={true}
            name="email"
            className="rounded-md"
            value={resumeData?.contactDetails.email || ""}
            type="email"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <FormSubmitButton
          buttonText="Save & Continue"
          pendingText="Saving contact details..."
          type="submit"
        ></FormSubmitButton>
      </div>
    </form>
  );
};

export default ContactForm;
