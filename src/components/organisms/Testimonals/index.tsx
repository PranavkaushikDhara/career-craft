import React from "react";
import TestimonalCard from "@/components/atoms/TestimonalCard";

const testimonials = [
  {
    photo: (
      <img
        src="/person1.jpg"
        alt="Pranav Kaushik"
        className="w-12 h-12 rounded-full"
      />
    ),
    name: "Pranav Kaushik",
    title: "CEO, TechCorp",
    testimonal:
      "This platform transformed my resume and helped me land my dream job in less than two weeks. Highly recommend it!",
  },
  {
    photo: (
      <img
        src="/person2.jpg"
        alt="Rajesh Kumar"
        className="w-12 h-12 rounded-full"
      />
    ),
    name: "Rajesh Kumar",
    title: "Senior Developer, DevCompany",
    testimonal:
      "Thanks to this tool, my LinkedIn profile now attracts recruiters effortlessly. It's a game-changer!",
  },
  {
    photo: (
      <img
        src="/person3.jpg"
        alt="Chandra Sekhar"
        className="w-12 h-12 rounded-full"
      />
    ),
    name: "Chandra Sekhar",
    title: "Product Manager, Innovate Inc.",
    testimonal:
      "Writing emails used to be a hassle, but this tool makes it so easy and professional. Love it!",
  },
  {
    photo: (
      <img
        src="/person4.jpg"
        alt="Kalpana"
        className="w-12 h-12 rounded-full"
      />
    ),
    name: "Kalpana",
    title: "Data Scientist, Analytics Hub",
    testimonal:
      "The pitch generator is a lifesaver. I aced my interviews and impressed everyone with my elevator pitch.",
  },
];

const Testimonals = () => {
  return (
    <div className="flex flex-col px-8 py-12 ">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2  ">
          <h2 className="text-3xl font-bold text-CareerCraftWhite text-center">
            Success Stories
          </h2>
          <p className="text-lg text-CareerCraftText text-center">
            See how others transformed their career with our platform
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {testimonials.map((testimonal) => (
            <div className="flex-1 min-w-[280px] max-w-[320px]">
              <TestimonalCard
                name={testimonal.name}
                key={testimonal.name}
                title={testimonal.title}
                photo={testimonal.photo}
                testimonal={testimonal.testimonal}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
