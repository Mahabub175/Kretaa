"use client";

import useFetchData from "@/utils/hooks/useFetchData";
import Image from "next/image";

const Timeline = () => {
  const { data } = useFetchData("/steps/");

  return (
    <section className="relative w-full lg:py-10">
      <h1 className="text-center text-3xl lg:text-6xl font-bold mb-10 lg:mb-20">
        Getting your website up <br /> and running
      </h1>
      <div className="lg:max-w-4xl mx-auto relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-primary h-full hidden md:block"></div>

        <div className="flex flex-col lg:space-y-10">
          {data?.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex items-center w-full ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse lg:pr-6"
              }`}
            >
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full z-10 border-4 border-white"></div>

              <div className="w-full md:w-1/2 flex justify-center lg:justify-end -mt-5">
                <div className="p-5 rounded-lg max-w-sm md:max-w-md">
                  <Image
                    src={item.step_number}
                    alt={item.title}
                    width={250}
                    height={60}
                    className=""
                  />
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={180}
                    height={60}
                    className="mt-5"
                  />
                  <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
