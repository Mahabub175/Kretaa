"use client";

import LoadingAnimation from "@/components/Shared/Components/LoadingAnimation";
import useFetchData from "@/utils/hooks/useFetchData";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import right from "@/assets/images/right.png";
import avatar from "@/assets/images/avatar.png";
import Image from "next/image";
import SmallFeature from "./SmallFeature";

const Banner = () => {
  const { data, loading } = useFetchData("/hero/");

  return (
    <section className="relative overflow-hidden">
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="flex flex-col items-center justify-center my-10">
          <Image
            src={right}
            alt="right"
            width={1000}
            height={1000}
            className="absolute w-full h-[700px] -right-[20%] -z-10 -translate-x-10 -translate-y-64 hidden xl:block"
          />
          <div className="my-container flex flex-col justify-center items-center">
            <div className="text-center w-full xl:w-7/12 xxl:w-6/12">
              <div className="flex justify-center items-center gap-4 mb-5">
                <Image src={avatar} alt="avatar" width={100} height={100} />
                <p>
                  Join with{" "}
                  <span className="font-bold">500+ Satisfied Clients</span>
                </p>
              </div>
              <h2 className="text-3xl lg:text-6xl font-semibold mb-4 lg:mb-6 tracking-wide font-bricolage">
                {data?.[0]?.title}
              </h2>
              <p className="text-sm lg:text-xl mb-8 leading-[25px] lg:leading-[30px] mx-auto text-textColor">
                {data?.[0]?.description}
              </p>
              <div className="flex flex-col lg:flex-row items-center gap-5 justify-center">
                <Link
                  href={`${
                    data?.[0]?.button_link ? data?.[0]?.button_link : "/contact"
                  }`}
                >
                  <button className="text-white bg-primary border border-primary hover:bg-primaryLight hover:text-primary duration-300 px-14 py-2.5 rounded-full font-medium">
                    Explore
                    <CgArrowTopRight className="inline-block ml-1" />
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="text-primary bg-primaryLight border border-primary hover:bg-primary hover:text-white duration-300 px-14 py-2.5 rounded-full font-medium">
                    See Plans
                  </button>
                </Link>
              </div>
            </div>
            <SmallFeature />
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
