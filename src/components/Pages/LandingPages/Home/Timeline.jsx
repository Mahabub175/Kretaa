"use client";

import Image from "next/image";
import office from "@/assets/images/office.png";

const Timeline = () => {
  return (
    <section className="relative w-full lg:py-10 my-container">
      <div className="flex flex-col xl:flex-row justify-center items-center w-full">
        <div className="blue-gradient text-white text-3xl lg:text-4xl  font-semibold px-5 flex justify-center items-center w-[700px] h-[209px] text-center">
          <p>
            Getting your website <br /> up and running
          </p>
        </div>
        <Image
          src={office}
          alt="office"
          className="object-cover"
          width={700}
          height={500}
        />
      </div>
    </section>
  );
};

export default Timeline;
