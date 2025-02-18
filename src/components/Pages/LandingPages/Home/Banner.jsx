"use client";

import Image from "next/image";
import banner from "@/assets/images/banner.png";
import bg from "@/assets/images/bg.png";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import CustomModal from "@/components/Reusable/Modal/CustomModal";
import Link from "next/link";
import useFetchData from "@/utils/hooks/useFetchData";
import LoadingAnimation from "@/components/Shared/Components/LoadingAnimation";

const Banner = () => {
  const [open, setOpen] = useState(false);
  const { data, loading } = useFetchData("/hero/");

  return (
    <section className="my-container relative">
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="">
            <Image
              src={bg}
              alt="banner"
              width={1000}
              height={1000}
              className="absolute top-0 right-1/2 left-1/2 -translate-x-1/2 -z-10 h-[600px] lg:h-[800px] w-[1500px]"
            />
            <div className="absolute top-0 left-0 w-full h-1/6 lg:h-1/3 bg-gradient-to-b from-white via-transparent to-transparent -z-10"></div>
          </div>

          <div className="text-center lg:text-left lg:w-4/6">
            <h2 className="text-3xl lg:text-6xl font-bold mb-6">
              {data?.[0]?.title}
            </h2>
            <p className="text-xl mb-8 leading-[30px]">
              {data?.[0]?.description}
            </p>
            <Link
              href={`${
                data?.[0]?.button_link ? data?.[0]?.button_link : "/contact"
              }`}
            >
              <button className="text-white bg-primary px-16 py-3 rounded-lg font-bold">
                {data?.[0]?.button_text ? data?.[0]?.button_text : "Contact"}
              </button>
            </Link>
          </div>
          <div className="relative mt-10 lg:mt-0">
            <div
              className="bg-primary p-4 rounded-full absolute top-[45%] left-8 animate-pulse"
              onClick={() => setOpen(true)}
            >
              <FaPlay className="text-3xl text-white" />
            </div>
            <Image
              src={data?.[0]?.image ?? banner}
              alt="banner"
              width={600}
              height={400}
            />
          </div>
        </div>
      )}
      <CustomModal isOpen={open} setOpen={setOpen}>
        <div className="mx-auto w-full">
          <iframe
            src={data?.[0]?.video_link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-[360px] h-[225px] lg:w-[600px] lg:h-[338px] mx-auto"
          ></iframe>
        </div>
      </CustomModal>
    </section>
  );
};

export default Banner;
