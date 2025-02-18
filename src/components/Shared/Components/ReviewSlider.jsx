"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";
import useFetchData from "@/utils/hooks/useFetchData";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRef } from "react";

const ReviewSlider = () => {
  const swiperRef = useRef();
  const { data } = useFetchData("/testimonials/");

  return (
    <section className="my-container my-20 relative">
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col bg-white p-6 rounded-lg shadow text-start border">
              <Image
                src={item.image}
                alt="Reviewer"
                width={80}
                height={80}
                className="rounded-full mb-4 w-[60px] h-[60px]"
              />
              <p className="text-gray-700 italic">{item.description}</p>
              <div className="flex items-center justify-between mt-5">
                <div>
                  <h3 className="mt-4 font-bold text-lg">{item.name}</h3>
                  <p className="text-gray-500">{item.position}</p>
                </div>
                <div className="bg-primaryDark rounded-full px-3 py-1">
                  <p className="text-white font-semibold">{item.rating} ⭐</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-center gap-5 mt-10">
        <button
          className="lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white text-black border border-primary hover:bg-primary hover:text-white duration-300 absolute top-[40%] left-0 z-10"
          onClick={() => swiperRef.current.slidePrev()}
        >
          <FaAngleLeft className="text-xl" />
        </button>
        <button
          className="lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white text-black border border-primary hover:bg-primary hover:text-white duration-300 absolute top-[40%] right-0 z-10"
          onClick={() => swiperRef.current.slideNext()}
        >
          <FaAngleRight className="text-xl" />
        </button>
      </div>
    </section>
  );
};

export default ReviewSlider;
