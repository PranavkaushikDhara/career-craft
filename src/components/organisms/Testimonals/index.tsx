import React from "react";
import TestimonalCard from "@/components/atoms/TestimonalCard";

const testimonials = [
  {
    photo: (
      <img
        src="/person1.jpg"
        alt="John Doe"
        className="w-12 h-12 rounded-full"
      />
    ),
    name: "John Doe",
    title: "CEO, TechCorp",
    testimonal:
      "This platform transformed my resume and helped me land my dream job in less than two weeks. Highly recommend it!",
  },
  {
    photo: (
      <img
        src="/person2.jpg"
        alt="Jane Smith"
        className="w-12 h-12 rounded-full"
      />
    ),
    name: "Jane Smith",
    title: "Senior Developer, DevCompany",
    testimonal:
      "Thanks to this tool, my LinkedIn profile now attracts recruiters effortlessly. It's a game-changer!",
  },
  {
    photo: (
      <img
        src="/person3.jpg"
        alt="Alice Johnson"
        className="w-12 h-12 rounded-full"
      />
    ),
    name: "Alice Johnson",
    title: "Product Manager, Innovate Inc.",
    testimonal:
      "Writing emails used to be a hassle, but this tool makes it so easy and professional. Love it!",
  },
  {
    photo: (
      <img
        src="/person4.jpg"
        alt="Michael Brown"
        className="w-12 h-12 rounded-full"
      />
    ),
    name: "Michael Brown",
    title: "Data Scientist, Analytics Hub",
    testimonal:
      "The pitch generator is a lifesaver. I aced my interviews and impressed everyone with my elevator pitch.",
  },
];

const Testimonals = () => {
  return (
    <div className="flex flex-col p-4 gap-2 items-center">
      <span className="text-lg font-bold text-CareerCraftWhite">
        Success Stories
      </span>
      <span className=" text-sm text-CareerCraftText">
        See how others transformed their career with our platform
      </span>
      <div className="w-full  flex flex-col md:flex-row gap-4 flex-wrap p-4 md:justify-center">
        {testimonials.map((testimonal) => {
          return (
            <TestimonalCard
              name={testimonal.name}
              key={testimonal.name}
              title={testimonal.title}
              photo={testimonal.photo}
              testimonal={testimonal.testimonal}
            ></TestimonalCard>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonals;
