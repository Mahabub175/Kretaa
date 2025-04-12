"use client";

import LoadingAnimation from "@/components/Shared/Components/LoadingAnimation";
import useFetchData from "@/utils/hooks/useFetchData";
import dayjs from "dayjs";
import Image from "next/image";
import { FaCalendar, FaEye } from "react-icons/fa";

const SingleBlogDetails = ({ params }) => {
  const { data, loading } = useFetchData("/blogs?depth=3");

  const item = data?.find((item) => item?.slug === params);

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <section className="my-container my-5 lg:my-10">
          <div className="relative">
            <Image
              src={item.thumbnail}
              alt="blog"
              width={2000}
              height={100}
              className="rounded-xl w-full lg:h-[600px]"
            />
            <div className="flex justify-start items-center gap-10 mt-5 lg:mt-10 px-5 lg:px-12 py-2 absolute bottom-0 right-0 bg-white text-black/70 rounded-tl-xl">
              <div className="flex items-center gap-2">
                <FaCalendar />
                <p>{dayjs(item?.post_date_time).format("MMMM DD, YYYY")}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaEye />
                <p>{item?.visitors || 0}</p>
              </div>
            </div>
          </div>
          <div className="p-2 mt-5 lg:mt-10">
            <div dangerouslySetInnerHTML={{ __html: item?.description }} />
          </div>
        </section>
      )}
    </>
  );
};

export default SingleBlogDetails;
