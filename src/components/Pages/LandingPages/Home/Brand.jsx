"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Brand = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://viscarttoolsapi.moonsgallerysystem.com/api/v1/brand/`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result?.data?.results);
      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, []);

  return (
    <section className="my-container flex flex-wrap gap-10 justify-center items-center -mt-10 mb-20">
      {data?.map((item) => (
        <div
          key={item?._id}
          className="hover:scale-105 p-5 rounded-xl border border-transparent hover:border-primary duration-300 transition-all"
        >
          <Image
            src={item?.attachment}
            alt={item?.name}
            width={200}
            height={200}
          />
        </div>
      ))}
    </section>
  );
};

export default Brand;
