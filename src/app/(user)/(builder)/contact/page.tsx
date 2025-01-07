import ContactForm from "@/components/organisms/forms/Contact";

import React from "react";

const Contact: React.FC = () => {
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
