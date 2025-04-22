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
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { demoData } from "@/assets/data/demoData";

const DemoSlider = () => {
  const swiperRef = useRef();
  const [activeTab, setActiveTab] = useState("mobile");

  return (
    <section className="pt-10 pb-5 lg:py-32 my-10 bg-primaryLight/50 font-hind">
      <div className="text-center px-5">
        <h3 className="text-3xl lg:text-6xl font-semibold mb-4">
          <span className="text-primary">ডেমো</span> ভার্সন
        </h3>
        <p className="text-base lg:text-lg">
          ডেমো ভার্সনের মাধ্যমে আমাদের সকল ফিচার এক্সপ্লোর করুন এবং বুঝুন কেন
          আমাদের সলিউশন আপনার <br className="hidden lg:block" /> ব্যবসার জন্য
          উপযুক্ত।
        </p>
      </div>

      <div className="py-10">
        <div className="flex justify-center space-x-6 mb-6 border border-primaryDark py-2 w-72 mx-auto rounded-xl">
          <button
            className={`flex items-center px-4 py-2 rounded-full text-lg font-medium ${
              activeTab === "mobile" ? "bg-primaryDark text-white" : ""
            }`}
            onClick={() => setActiveTab("mobile")}
          >
            <FiSmartphone className="mr-2" /> Mobile
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-full text-lg font-medium ${
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
                1220: { slidesPerView: 4 },
                1400: { slidesPerView: 5 },
              }}
              spaceBetween={20}
              loop
              navigation={false}
              className="mySwiper"
            >
              {demoData?.map((item) => (
                <SwiperSlide key={item.id} className="flex justify-center">
                  {({ isActive }) => {
                    const isCenter = isActive;

                    const mobileWidth = isCenter ? 225 : 180;
                    const mobileHeight = isCenter ? 500 : 420;

                    const webWidth = isCenter ? 800 : 200;
                    const wenHeight = isCenter ? 700 : 260;

                    return (
                      <div
                        className={`transition-all duration-300 ${
                          isCenter
                            ? "scale-100"
                            : "scale-90 opacity-50 xxl:translate-y-10"
                        }`}
                      >
                        <Image
                          src={
                            activeTab === "mobile"
                              ? item.mobileImage
                              : item.laptopImage
                          }
                          alt="Screenshot"
                          width={
                            activeTab === "mobile" ? mobileWidth : webWidth
                          }
                          height={
                            activeTab === "mobile" ? mobileHeight : wenHeight
                          }
                          className={`mx-auto object-cover ${
                            activeTab === "web"
                              ? "w-[580px] h-[180px] -translate-x-2"
                              : ""
                          } ${
                            !isCenter
                              ? "lg:translate-y-12 xxl:translate-y-0"
                              : ""
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
              width={activeTab === "mobile" ? 245 : 520}
              height={activeTab === "mobile" ? 480 : 350}
              className={`pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 ${
                activeTab === "mobile" ? "" : "mt-1"
              }`}
            />

            <button
              className="lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-primaryDark text-white border border-primaryDark hover:bg-white hover:text-black duration-300 absolute top-[45%] left-5 lg:left-[25%] z-20"
              onClick={() => swiperRef.current.slidePrev()}
            >
              <FaAngleLeft className="text-xl" />
            </button>
            <button
              className="lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-primaryDark text-white border border-primaryDark hover:bg-white hover:text-black duration-300 absolute top-[45%] right-5 lg:right-[25%] z-20"
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
