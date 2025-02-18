"use client";

import man from "@/assets/images/man.png";
import useFetchData from "@/utils/hooks/useFetchData";
import Image from "next/image";

const WhyUs = () => {
  const { data } = useFetchData("/facilities?depth=3");

  return (
    <section
      style={{
        backgroundImage: `url('/big-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
      className="-mt-20 mb-20 pb-10 lg:pb-0"
    >
      <div className="my-container">
        <h2 className="text-center text-2xl lg:text-6xl font-bold pt-32 lg:pt-44 text-white">
          Why <span className="font-extrabold text-primary">Kretaa</span> is a
          Game Changer <br /> for Your Online Shop
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-20">
          <div>
            {data?.[0]?.facilities_item?.map((item) => (
              <div
                key={item?.id}
                className="bg-primaryDark p-5 rounded-xl text-white flex items-center gap-5 mt-2 border border-transparent hover:border-primary duration-300"
              >
                <Image
                  src={item?.image}
                  alt={item?.title}
                  width={80}
                  height={80}
                />
                <div>
                  <p className="text-lg mb-2 font-medium">{item?.title}</p>
                  <p className="">{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Image
              src={data?.[0]?.image ?? man}
              alt="man"
              width={600}
              height={600}
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
