import PrimaryButton from "@/components/atoms/Button";
import { ButonLinkSecondary } from "@/components/atoms/ButtonLink";
import Search from "@/components/atoms/Input";
import ContactForm from "@/components/organisms/forms/Contact";
import Link from "next/link";
import React from "react";
import { TiTickOutline } from "react-icons/ti";

const Contact = () => {
  return (
    <div className="flex flex-col gap-6  p-4  w-auto">
      <div className="flex flex-col gap-2 items-start">
        <span className="text-CareerCraftWhite font-bold text-2xl">
          <p>Contact</p>
          <p className="text-sm">
            Make sure employers can reach you by including your name, email, and
            phone number.
          </p>
        </span>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
