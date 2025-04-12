"use client";

import useFetchData from "@/utils/hooks/useFetchData";
import Image from "next/image";

const Feature = () => {
  const { data } = useFetchData("/services/");

  return (
    <section className="my-container lg:py-10 my-10">
      <h1 className="text-center text-3xl lg:text-6xl font-medium mb-10 lg:mb-20 font-bricolage">
        Our Core <span className="font-semibold text-primary">Features</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center mt-10 lg:mt-20 gap-5">
        {data?.map((item) => (
          <div
            key={item?.id}
            className="bg-white p-2 lg:p-10 rounded-lg flex flex-col justify-center text-center items-center gap-5 border border-primaryLight hover:border-primary duration-300 w-[160px] lg:w-[45%] xl:w-[30%] h-[250px]"
          >
            <Image
              src={item?.icon}
              alt={item?.title}
              width={60}
              height={60}
              className="w-10 h-10 lg:w-16 lg:h-16 mx-auto"
            />
            <div className="w-full">
              <p className="lg:text-lg mb-2 font-medium">{item?.title}</p>
              <p className="text-sm lg:text-base">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <button className="text-primary bg-primaryLight border border-primary hover:bg-primary hover:text-white duration-300 px-32 lg:px-14 py-2.5 rounded-full font-medium">
          See All Features
        </button>
      </div>
    </section>
  );
};

export default Feature;
