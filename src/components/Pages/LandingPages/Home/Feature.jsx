"use client";

import useFetchData from "@/utils/hooks/useFetchData";
import Image from "next/image";

const Feature = () => {
  const { data } = useFetchData("/services/");

  return (
    <section className="my-container py-10 my-10">
      <h1 className="text-center text-3xl lg:text-6xl font-medium mb-10 lg:mb-20 font-bricolage">
        Our Core <span className="font-semibold text-primary">Features</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center mt-10 lg:mt-20 gap-5">
        {data?.map((item) => (
          <div
            key={item?.id}
            className="bg-white p-10 rounded-lg flex flex-col justify-center text-center items-center gap-5 border border-primaryLight hover:border-primary duration-300 w-full lg:w-[45%] xl:w-[30%] h-[250px]"
          >
            <Image src={item?.icon} alt={item?.title} width={60} height={60} />
            <div className="w-full">
              <p className="text-lg mb-2 font-medium">{item?.title}</p>
              <p className="">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
