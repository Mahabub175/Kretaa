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
          <Image
            src={item.thumbnail}
            alt="blog"
            width={2000}
            height={100}
            className="rounded-xl"
          />
          <div className="flex justify-start items-center gap-10 mt-5 lg:mt-10 p-2">
            <div className="flex items-center gap-2">
              <FaCalendar />
              <p>{dayjs(item?.post_date_time).format("YYYY-MM-DD")}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaEye />
              <p>{item?.visitors || 0}</p>
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
