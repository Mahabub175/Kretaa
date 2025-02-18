"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiSmartphone, FiMonitor } from "react-icons/fi";
import mobileFrame from "@/assets/images/mobile.png";
import laptopFrame from "@/assets/images/laptop.png";
import mobileSS from "@/assets/images/mobileSS.png";
import laptopSS from "@/assets/images/laptopSS.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const data = [
  { id: 1, name: "demo one", mobileImage: mobileSS, laptopImage: laptopSS },
  { id: 2, name: "demo two", mobileImage: mobileSS, laptopImage: laptopSS },
  { id: 3, name: "demo three", mobileImage: mobileSS, laptopImage: laptopSS },
  { id: 4, name: "demo three", mobileImage: mobileSS, laptopImage: laptopSS },
  { id: 5, name: "demo three", mobileImage: mobileSS, laptopImage: laptopSS },
];

const DemoSlider = () => {
  const swiperRef = useRef();

  const [activeTab, setActiveTab] = useState("mobile");

  return (
    <section className="bg-[#181A19] py-10 my-10">
      <div className="text-center text-white">
        <h3 className="text-3xl lg:text-6xl font-bold mb-4">Demo Version</h3>
        <p className="text-base lg:text-lg mb-10">
          We provide lots of facilities and Unique Features
        </p>
      </div>

      <div className="bg-[#1A211F99] py-10">
        <div className="flex justify-center space-x-6 mb-6 border border-white p-5 w-72 mx-auto rounded-xl">
          <button
            className={`flex items-center px-4 py-2 rounded-full text-lg font-semibold ${
              activeTab === "mobile" ? "bg-primary text-white" : "text-white"
            }`}
            onClick={() => setActiveTab("mobile")}
          >
            <FiSmartphone className="mr-2" /> Mobile
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-full text-lg font-semibold ${
              activeTab === "web" ? "bg-primary text-white" : "text-white"
            }`}
            onClick={() => setActiveTab("web")}
          >
            <FiMonitor className="mr-2" /> Web
          </button>
        </div>

        <div className="relative flex justify-center items-center my-container">
          <Image
            src={activeTab === "mobile" ? mobileFrame : laptopFrame}
            alt="Device Frame"
            width={activeTab === "mobile" ? 250 : 500}
            height={activeTab === "mobile" ? 500 : 350}
            className="relative z-0"
          />

          <div className="absolute inset-0 flex justify-center items-center">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={false}
              className="mySwiper"
              loop
            >
              {data.map((item) => (
                <SwiperSlide key={item.id} className="flex justify-center">
                  <Image
                    src={
                      activeTab === "mobile"
                        ? item.mobileImage
                        : item.laptopImage
                    }
                    alt="Screenshot"
                    width={activeTab === "mobile" ? 225 : 280}
                    height={activeTab === "mobile" ? 500 : 320}
                    className={`rounded-xl z-10 mx-auto ${
                      activeTab === "web" ? "-translate-x-2 mb-2" : ""
                    } `}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center justify-center gap-5 mt-10">
              <button
                className="lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white text-black border border-primary hover:bg-primary hover:text-white duration-300 absolute top-[45%] left-5 lg:left-1/4 z-10"
                onClick={() => swiperRef.current.slidePrev()}
              >
                <FaAngleLeft className="text-xl" />
              </button>
              <button
                className="lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white text-black border border-primary hover:bg-primary hover:text-white duration-300 absolute top-[45%] right-5 lg:right-1/4 z-10"
                onClick={() => swiperRef.current.slideNext()}
              >
                <FaAngleRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSlider;
