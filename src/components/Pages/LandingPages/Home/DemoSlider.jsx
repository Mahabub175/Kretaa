"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
  { id: 4, name: "demo four", mobileImage: mobileSS, laptopImage: laptopSS },
  { id: 5, name: "demo five", mobileImage: mobileSS, laptopImage: laptopSS },
  { id: 6, name: "demo six", mobileImage: mobileSS, laptopImage: laptopSS },
  { id: 7, name: "demo seven", mobileImage: mobileSS, laptopImage: laptopSS },
  { id: 8, name: "demo eight", mobileImage: mobileSS, laptopImage: laptopSS },
];

const DemoSlider = () => {
  const swiperRef = useRef();
  const [activeTab, setActiveTab] = useState("mobile");

  return (
    <section className="py-10 my-10 bg-primaryLight/50">
      <div className="text-center">
        <h3 className="text-3xl lg:text-6xl font-semibold mb-4">
          Demo Version
        </h3>
        <p className="text-base lg:text-lg">
          We provide lots of facilities and Unique Features
        </p>
      </div>

      <div className="py-10">
        <div className="flex justify-center space-x-6 mb-6 border border-primaryDark p-3 lg:p-5 w-72 mx-auto rounded-xl">
          <button
            className={`flex items-center px-4 py-2 rounded-full text-lg font-semibold ${
              activeTab === "mobile" ? "bg-primaryDark text-white" : ""
            }`}
            onClick={() => setActiveTab("mobile")}
          >
            <FiSmartphone className="mr-2" /> Mobile
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-full text-lg font-semibold ${
              activeTab === "web" ? "bg-primaryDark text-white" : ""
            }`}
            onClick={() => setActiveTab("web")}
          >
            <FiMonitor className="mr-2" /> Web
          </button>
        </div>

        <div className="relative flex justify-center items-center my-container mt-10">
          <div className="relative w-full">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              centeredSlides
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1220: { slidesPerView: 5 },
              }}
              spaceBetween={20}
              loop
              navigation={false}
              className="mySwiper"
            >
              {data.map((item) => (
                <SwiperSlide key={item.id} className="flex justify-center">
                  {({ isActive }) => {
                    const isCenter = isActive;
                    const width =
                      activeTab === "mobile"
                        ? isCenter
                          ? 225
                          : 180
                        : isCenter
                        ? 280
                        : 220;
                    const height =
                      activeTab === "mobile"
                        ? isCenter
                          ? 500
                          : 420
                        : isCenter
                        ? 320
                        : 260;

                    return (
                      <div
                        className={`transition-all duration-300 ${
                          isCenter
                            ? "scale-100"
                            : "scale-90 opacity-80 translate-y-10"
                        }`}
                      >
                        <Image
                          src={
                            activeTab === "mobile"
                              ? item.mobileImage
                              : item.laptopImage
                          }
                          alt="Screenshot"
                          width={width}
                          height={height}
                          className={`rounded-xl mx-auto ${
                            activeTab === "web" ? "-translate-x-2 mb-2" : ""
                          }`}
                        />
                      </div>
                    );
                  }}
                </SwiperSlide>
              ))}
            </Swiper>

            <Image
              src={activeTab === "mobile" ? mobileFrame : laptopFrame}
              alt="Device Frame"
              width={activeTab === "mobile" ? 250 : 500}
              height={activeTab === "mobile" ? 500 : 350}
              className={`pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 ${
                activeTab === "mobile" ? "" : ""
              }`}
            />

            <button
              className="lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-primary text-white border border-primary hover:bg-transparent hover:text-black duration-300 absolute top-[45%] left-5 lg:left-[25%] z-20"
              onClick={() => swiperRef.current.slidePrev()}
            >
              <FaAngleLeft className="text-xl" />
            </button>
            <button
              className="lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-primary text-white border border-primary hover:bg-transparent hover:text-black duration-300 absolute top-[45%] right-5 lg:right-[25%] z-20"
              onClick={() => swiperRef.current.slideNext()}
            >
              <FaAngleRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSlider;
