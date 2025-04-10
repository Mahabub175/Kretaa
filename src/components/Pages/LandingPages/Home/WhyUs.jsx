"use client";

import useFetchData from "@/utils/hooks/useFetchData";
import Image from "next/image";

const WhyUs = () => {
  const { data } = useFetchData("/facilities?depth=3");

  return (
    <section className="-mt-16 lg:-mt-0 mb-20">
      <div className="my-container">
        <h2 className="text-center text-2xl lg:text-6xl font-semibold pt-16 xl:pt-20 tracking-wide font-bricolage">
          Why <span className="font-bold text-primary">Kretaa</span> is a Game
          Changer <br className="hidden xl:block" /> for Your Online Shop
        </h2>
        <div className="flex flex-wrap items-center justify-center mt-10 lg:mt-20 gap-5">
          {data?.[0]?.facilities_item?.map((item) => (
            <div
              key={item?.id}
              className="bg-white p-2 lg:p-10 rounded-lg flex flex-col justify-center text-center items-center gap-5 border border-primaryLight shadow-xl hover:border-primary duration-300 w-[160px] lg:w-[45%] xl:w-[30%] h-[250px]"
            >
              <Image
                src={item?.image}
                alt={item?.title}
                width={80}
                height={80}
                className="w-10 h-10 lg:w-16 lg:h-16 mx-auto"
              />
              <div className="w-full">
                <p className="lg:text-lg mb-2 font-medium">{item?.title}</p>
                <p className="text-sm lg:text-base">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
