"use client";

import Link from "next/link";
import useFetchData from "@/utils/hooks/useFetchData";
import LoadingAnimation from "@/components/Shared/Components/LoadingAnimation";
import Image from "next/image";
import dayjs from "dayjs";

const AllBlogs = () => {
  const { data, loading } = useFetchData("/blogs?depth=3");

  const featuredBlog =
    data?.find((item) => item?.is_featured === true) || undefined;

  return (
    <section className="my-container my-5 lg:my-10">
      {featuredBlog && (
        <div className="mt-10 mb-20">
          <div
            key={featuredBlog.id}
            className="xl:w-4/6 mx-auto border rounded-xl flex flex-col lg:flex-row items-center gap-10 shadow pb-10 lg:pb-0"
          >
            <Image
              src={featuredBlog.thumbnail}
              alt="blog"
              width={500}
              height={400}
              className="rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl w-full lg:w-[500px]"
            />
            <div className="p-1.5 lg:mt-4 text-sm lg:text-base">
              <p className="text-gray-600 mb-2 text-center lg:text-start">
                {dayjs(featuredBlog?.post_date_time).format("MMMM DD, YYYY")}
              </p>
              <h3 className="font-medium text-center lg:text-start text-xl">
                {featuredBlog.title}
              </h3>
              <div className="flex flex-col lg:flex-row justify-between items-center mt-4 lg:mt-6 text-center lg:text-start">
                <Link
                  href={`/blog/${featuredBlog?.slug}`}
                  className="text-primary hover:underline font-medium font-hind"
                >
                  সম্পূর্ণ লেখাটি পড়ুন &gt;&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <h2 className="text-center text-3xl lg:text-6xl font-medium my-5 lg:my-10 font-hind">
        সাম্প্রতিক
        <span className="font-semibold text-primary"> ব্লগ সমূহ</span>
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
                className="rounded-t-xl w-full h-[150px] lg:h-[200px] xl:h-[300px]"
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
                    className="text-primary hover:underline font-medium mt-2 lg:mt-0 font-hind"
                  >
                    সম্পূর্ণ লেখাটি পড়ুন &gt;&gt;
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
