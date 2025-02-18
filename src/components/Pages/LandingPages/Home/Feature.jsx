"use client";

import useFetchData from "@/utils/hooks/useFetchData";
import Image from "next/image";

const Feature = () => {
  const { data } = useFetchData("/services/");

  return (
    <section className="my-container py-10">
      <h1 className="text-center text-3xl lg:text-6xl font-bold mb-10 lg:mb-20">
        Our Features
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.map((item) => (
          <div
            key={item.id}
            className="border-2 border-primary/40 p-5 rounded-xl hover:border-primary duration-300 flex flex-col justify-center items-center text-center gap-5"
          >
            <Image
              src={item.icon}
              alt={item?.title}
              className="object-cover lg:w-[100px] lg:h-[100px]"
              width={100}
              height={100}
            />
            <div className="lg:w-5/6">
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-xs lg:text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
