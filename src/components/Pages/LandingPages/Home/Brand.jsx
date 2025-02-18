"use client";

import useFetchData from "@/utils/hooks/useFetchData";
import Image from "next/image";

const Brand = () => {
  const { data } = useFetchData("/clients");

  return (
    <section className="my-container flex flex-wrap gap-10 justify-center items-center -mt-10 mb-20">
      {data?.map((item) => (
        <div
          key={item?.id}
          className="hover:scale-105 p-5 rounded-xl border border-transparent hover:border-primary duration-300 transition-all"
        >
          <Image src={item?.image} alt={item?.name} width={200} height={200} />
        </div>
      ))}
    </section>
  );
};

export default Brand;
