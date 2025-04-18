"use client";

import Link from "next/link";
import useFetchData from "@/utils/hooks/useFetchData";
import LoadingAnimation from "@/components/Shared/Components/LoadingAnimation";
import Image from "next/image";
import dayjs from "dayjs";

const AllBlogs = () => {
  const { data, loading } = useFetchData("/blogs?depth=3");

  return (
    <section className="my-container my-5 lg:my-10">
      <h2 className="text-center text-2xl lg:text-6xl font-medium my-5 lg:my-10 font-hind">
        Recent
        <span className="font-semibold text-primary"> Blogs</span>
      </h2>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-10">
          {data?.map((item) => (
            <div key={item.id} className="w-full mx-auto border rounded-xl p-2">
              <Image
                src={item.thumbnail}
                alt="blog"
                width={360}
                height={100}
                className="rounded-t-xl w-full h-[150px] lg:h-[350px]"
              />
              <div className="p-1.5 mt-4 text-sm lg:text-base">
                <h3 className="font-medium text-center lg:text-start">
                  {item.title}
                </h3>
                <div className="flex flex-col lg:flex-row justify-between items-center mt-4 lg:mt-6 text-center lg:text-start">
                  <p className="text-gray-600">
                    {dayjs(item?.post_date_time).format("MMMM DD, YYYY")}
                  </p>
                  <Link
                    href={`/blog/${item?.slug}`}
                    className="text-primary hover:underline font-medium mt-2 lg:mt-0"
                  >
                    Read the full article
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center justify-center my-10">
        <button className="text-primary bg-primaryLight border border-primary hover:bg-primary hover:text-white duration-300 px-32 lg:px-14 py-2.5 rounded-full font-medium">
          See All Blogs
        </button>
      </div>
    </section>
  );
};

export default AllBlogs;
