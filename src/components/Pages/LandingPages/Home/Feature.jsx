"use client";

import { useState } from "react";
import useFetchData from "@/utils/hooks/useFetchData";
import Image from "next/image";
import LoadingAnimation from "@/components/Shared/Components/LoadingAnimation";

const Feature = () => {
  const { data, loading } = useFetchData("/services/");
  const [showAll, setShowAll] = useState(false);

  if (loading) {
    return <LoadingAnimation />;
  }

  const visibleData = showAll ? data : data?.slice(0, 6);

  return (
    <section className="my-container lg:py-10 my-10">
      <h1 className="text-center text-3xl lg:text-6xl font-medium mb-10 lg:mb-20 font-hind">
        আমাদের মূল <span className="font-semibold text-primary">ফিচারসমূহ</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center mt-10 lg:mt-20 gap-2 lg:gap-5">
        {visibleData.map((item) => (
          <div
            key={item?.id}
            className="bg-white p-2 lg:p-10 rounded-lg flex flex-col justify-center text-center items-center gap-5 border border-primaryLight hover:border-primary duration-300 w-[180px] lg:w-[45%] xl:w-[30%] h-[250px] font-hind"
          >
            <Image
              src={item?.icon}
              alt={item?.title}
              width={60}
              height={60}
              unoptimized
              className="w-14 h-14 lg:w-16 lg:h-16 mx-auto"
            />
            <div className="w-full">
              <p className="text-base lg:text-xl mb-2 font-bold">
                {item?.title}
              </p>
              <p className="text-sm lg:text-base">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>

      {data?.length > 6 && (
        <div className="flex items-center justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="text-primary bg-primaryLight border border-primary hover:bg-primary hover:text-white duration-300 px-32 lg:px-14 py-2.5 rounded-full font-medium font-hind"
          >
            সকল ফিচার সমূহ
          </button>
        </div>
      )}
    </section>
  );
};

export default Feature;
