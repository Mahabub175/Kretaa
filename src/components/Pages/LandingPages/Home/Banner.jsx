"use client";

import LoadingAnimation from "@/components/Shared/Components/LoadingAnimation";
import useFetchData from "@/utils/hooks/useFetchData";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";
import right from "@/assets/images/right.png";
import avatar from "@/assets/images/avatar.png";
import Image from "next/image";
import SmallFeature from "./SmallFeature";
import { useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import useFullUrl from "@/utils/hooks/useGetURL";
import useConversionApi from "@/utils/hooks/useConversionApi";

const Banner = () => {
  const { data, loading } = useFetchData("/hero/");

  const url = useFullUrl();
  const { postData } = useConversionApi();

  useEffect(() => {
    sendGTMEvent({ event: "PageView", value: url });
    const data = {
      event_name: "PageView",
      event_source_url: url,
    };
    postData(data);
  }, []);

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
            <div className="text-center w-full">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-5 font-hind">
                <Image src={avatar} alt="avatar" width={100} height={100} />
                <p>
                  <span className="font-bold">৫০০+ সন্তুষ্ট গ্রাহকের </span>
                  আস্থার সঙ্গে আপনার ব্যবসাও যুক্ত হোক আজই
                </p>
              </div>
              <h2 className="text-3xl lg:text-6xl font-medium mb-4 lg:mb-6 tracking-wide font-hind flex flex-col gap-4">
                <span>ব্যবসা হোক ডিজিটাল,</span>
                <span>
                  <span className="font-semibold text-primary">ই-কমার্স </span>
                  হোক ঝামেলামুক্ত
                </span>
              </h2>
              <p className="text-sm lg:text-xl mb-8 leading-[25px] lg:leading-[30px] mx-auto text-textColor flex flex-col gap-2 font-hind">
                <span>
                  অর্ডার থেকে ডেলিভারি, স্টক থেকে রিপোর্ট — সব এক প্ল্যাটফর্মে
                </span>
                <span>ই-কমার্স ব্যবসা এবার হবে স্মার্ট ও নির্ভরযোগ্য।</span>
              </p>
              <div className="flex flex-col lg:flex-row items-center gap-5 justify-center">
                <Link href={`/demo`}>
                  <button className="text-white bg-primary border border-primary hover:bg-primaryLight hover:text-primary duration-300 px-20 lg:px-14 py-2.5 rounded-full font-medium font-hind">
                    বিস্তারিত দেখুন
                    <CgArrowTopRight className="inline-block ml-1" />
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="text-primary bg-primaryLight border border-primary hover:bg-primary hover:text-white duration-300 px-20 lg:px-14 py-2.5 rounded-full font-medium font-hind">
                    প্যাকেজ দেখুন
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
