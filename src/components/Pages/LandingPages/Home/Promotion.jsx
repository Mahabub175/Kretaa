"use client";

import Image from "next/image";
import video from "@/assets/images/video.png";
import { FaPlay } from "react-icons/fa";
import useFetchData from "@/utils/hooks/useFetchData";
import { useState } from "react";
import CustomModal from "@/components/Reusable/Modal/CustomModal";

const Promotion = () => {
  const { data: ctaData } = useFetchData("/specialcta/");
  const { data: counterData } = useFetchData("/counter-items/");
  const [open, setOpen] = useState(false);

  return (
    <section className="py-10">
      <div className="pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-20 my-container">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl lg:text-6xl mb-6 font-medium">
              Kretaa's Shop <br />{" "}
              <span className="text-primary font-bold">Automation Tool</span>
            </h3>
            <p className="lg:text-lg lg:w-4/6">{ctaData?.[0]?.description}</p>
          </div>
          <div className="relative mt-10 lg:mt-0">
            <div
              className="bg-[#232323CC] px-10 py-5 rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
              onClick={() => setOpen(true)}
            >
              <FaPlay className="text-7xl text-white" />
            </div>
            <Image src={video} alt="video" width={600} height={600} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-container -mt-10">
        {counterData?.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-5 blue-gradient p-8 rounded-xl"
          >
            <Image
              src={item.image}
              alt={item?.title}
              className="object-cover w-[80px] h-[80px]"
              width={80}
              height={80}
            />
            <div>
              <h3 className="text-white text-4xl font-semibold">
                {item.number}+
              </h3>
              <p className="text-white text-xl">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <CustomModal isOpen={open} setOpen={setOpen}>
        <div className="mx-auto w-full">
          <iframe
            src={ctaData?.[0]?.video_link}
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

export default Promotion;
