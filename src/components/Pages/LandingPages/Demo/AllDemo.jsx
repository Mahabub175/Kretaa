"use client";

import Image from "next/image";
import Link from "next/link";
import useFetchData from "@/utils/hooks/useFetchData";
import LoadingAnimation from "@/components/Shared/Components/LoadingAnimation";

const AllDemo = () => {
  const { data, loading } = useFetchData("/demo?depth=3");

  return (
    <section className="my-container my-5 lg:my-10">
      <h2 className="text-2xl lg:text-4xl font-bold text-center">
        Our Latest Project
      </h2>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          {data?.map((item) => (
            <div
              key={item.id}
              className="lg:w-[360px] mx-auto p-2 rounded-xl border border-primary"
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
                    href={`${item.preview_link}`}
                    className="text-primary border border-primary rounded-xl font-medium px-10 py-2 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AllDemo;
