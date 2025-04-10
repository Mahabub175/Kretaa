"use client";

import LoadingAnimation from "@/components/Shared/Components/LoadingAnimation";
import useFetchData from "@/utils/hooks/useFetchData";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Connections = () => {
  const { data, loading, error } = useFetchData("/clients/");

  return (
    <section className="bg-primaryLight py-10 mb-10">
      <section className="my-container">
        {loading ? (
          <LoadingAnimation />
        ) : error ? (
          <p className="text-center text-red-500">
            Failed to load client logos. Please try again later.
          </p>
        ) : (
          <Marquee className="flex items-center justify-between">
            {data?.map((item) => (
              <Image
                key={item?.id}
                src={item?.image}
                alt={item?.name ?? "logo"}
                width={200}
                height={200}
                className="mx-10 lg:mx-20"
              />
            ))}
          </Marquee>
        )}
      </section>
    </section>
  );
};

export default Connections;
