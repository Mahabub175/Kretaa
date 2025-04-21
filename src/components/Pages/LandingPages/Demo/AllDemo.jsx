"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useFetchData from "@/utils/hooks/useFetchData";
import LoadingAnimation from "@/components/Shared/Components/LoadingAnimation";

const AllDemo = () => {
  const { data, loading } = useFetchData("/demo?depth=3");
  const [activeTab, setActiveTab] = useState("All");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      if (activeTab === "All") {
        setFilteredData(data);
      } else {
        const filtered = data?.filter((item) =>
          item?.categories?.some((cat) => cat.name === activeTab)
        );
        setFilteredData(filtered);
      }
    }
  }, [activeTab, data]);

  const getAllCategoryNames = () => {
    const categorySet = new Set();
    data?.forEach((item) =>
      item.categories?.forEach((cat) => categorySet.add(cat.name))
    );
    return ["All", ...Array.from(categorySet)];
  };

  return (
    <section className="my-container mb-10 lg:mb-0">
      <h2 className="text-center text-3xl lg:text-6xl font-medium my-5 lg:my-10 font-hind">
        সাম্প্রতিক
        <span className="font-semibold text-primary"> প্রজেক্ট সমূহ</span>
      </h2>

      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {getAllCategoryNames()?.map((name) => (
              <button
                key={name}
                onClick={() => setActiveTab(name)}
                className={`px-6 py-1.5 rounded-lg border transition-all duration-300 font-bricolage ${
                  activeTab === name
                    ? "bg-primary text-white border-primary font-bold"
                    : "hover:bg-primary hover:text-white bg-[#EFEFEF]"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {filteredData?.map((item) => (
              <div
                key={item.id}
                className="lg:w-[360px] mx-auto p-2 rounded-xl border border-transparent hover:border-primary duration-300 shadow-xxl"
              >
                <Image
                  src={item.thumbnail}
                  alt="demo"
                  width={360}
                  height={100}
                  className="rounded-xl w-full"
                />
                <div className="p-1.5 mt-4 text-center">
                  <h3 className="font-medium text-xl">{item.title}</h3>
                  <h3 className="mt-2 text-sm">{item.description}</h3>
                  <div className="flex justify-center mt-6">
                    <Link
                      href={item.preview_link}
                      className="text-primary border border-primary rounded-xl font-medium px-10 py-2 hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default AllDemo;
