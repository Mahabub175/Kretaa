"use client";

import Image from "next/image";
import steps from "@/assets/images/steps.png";

const Timeline = () => {
  return (
    <section className="relative w-full py-10 lg:py-32 bg-primaryLight mt-32 overflow-hidden">
      <div className="my-container relative z-10">
        <h1 className="text-center text-3xl lg:text-6xl font-medium mb-10 lg:mb-20 font-bricolage">
          Website Setup{" "}
          <span className="font-semibold text-primary">Process</span>
        </h1>
        <Image src={steps} alt="steps" className="w-full" />
      </div>
    </section>
  );
};

export default Timeline;
