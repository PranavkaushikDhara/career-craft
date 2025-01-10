import Image from "next/image";
import React from "react";

interface CardProps {
  photo: any;
  name: string;
  title: string;
  testimonal: string;
}
const TestimonalCard = (props: CardProps) => {
  return (
    <div className="flex flex-col items-start gap-2 bg-CareerCraftBackground p-4 rounded-md w-full md:max-w-[300px] min-h-[150px]">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-[60px] h-[60px]">
          <Image
            alt="picture"
            src="/wallpaper.jpg"
            className="w-full h-full rounded-[50%] object-cover"
            height={60}
            width={60}
          ></Image>
        </div>
        <div className="flex flex-col">
          <span className="text-md font-semibold text-CareerCraftWhite">
            {props.name}
          </span>
          <span className="text-sm text-CareerCraftText">{props.title}</span>
        </div>
      </div>
      <span className="text-sm text-CareerCraftText">{props.testimonal}</span>
    </div>
  );
};

export default TestimonalCard;
