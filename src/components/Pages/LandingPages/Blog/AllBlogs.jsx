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
      <h2 className="text-2xl lg:text-4xl font-bold font-bricolage">
        Recent Blogs
      </h2>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {data?.map((item) => (
            <div key={item.id} className="w-full mx-auto border rounded-xl p-2">
              <Image
                src={item.thumbnail}
                alt="blog"
                width={360}
                height={100}
                className="rounded-t-xl w-full h-[250px] lg:h-[450px]"
              />
              <div className="p-1.5 mt-4">
                <h3 className="font-medium">{item.title}</h3>
                <div className="flex justify-between items-center mt-6">
                  <p className="text-gray-600">
                    {dayjs(item?.post_date_time).format("MMMM DD, YYYY")}
                  </p>
                  <Link
                    href={`/blog/${item?.slug}`}
                    className="text-primary hover:underline font-medium"
                  >
                    Read the full article
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

export default AllBlogs;
