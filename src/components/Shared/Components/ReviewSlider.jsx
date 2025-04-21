"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";
import useFetchData from "@/utils/hooks/useFetchData";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState, useRef } from "react";

const ReviewSlider = () => {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const { data } = useFetchData("/testimonials/");

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section className="my-container relative lg:my-20">
      <h2 className="text-center text-2xl lg:text-6xl font-semibold tracking-wide font-hind">
        আমাদের গ্রাহকদের
        <span className="font-bold text-primary"> সাফল্যের গল্প</span>
      </h2>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1224: { slidesPerView: 3 },
        }}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper mt-10"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              className={`lg:w-[400px] mx-auto mb-10 flex flex-col items-center lg:items-start transition-opacity duration-300 ${
                index === activeIndex + 1 ? "opacity-100" : "opacity-50"
              }`}
            >
              <Image
                src={item?.image}
                alt="Reviewer"
                width={80}
                height={80}
                className="rounded-full mb-10 w-[60px] h-[60px]"
              />
              <div className="flex flex-col bg-white p-6 rounded-xl text-start border shadow-xl">
                <p className="lg:text-lg">{item.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <h3 className="mt-4 font-bold text-lg">{item.name}</h3>
                    <p className="text-gray-500">{item.position}</p>
                  </div>
                  <div className="bg-primaryDark rounded-full px-3 py-1">
                    <p className="text-white font-semibold">{item.rating} ⭐</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewSlider;
