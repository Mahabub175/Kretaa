"use client";

import CustomAccordion from "@/components/Reusable/Accordion/CustomAccordion";
import useFetchData from "@/utils/hooks/useFetchData";

const FAQ = () => {
  const { data } = useFetchData("/faqs");

  return (
    <section className="relative pt-10 pb-20 lg:py-32 bg-primaryLight lg:mt-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/design.png')` }}
      />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl lg:text-6xl font-semibold mb-5 font-hind">
          FAQs
        </h1>
        <p className="text-sm lg:text-xl font-hind mb-10 lg:mb-20 px-3">
          টেকনিক্যাল ঝামেলা ছাড়াই এখন শুরু করুন নিজের অনলাইন ব্যবসা! Kreta দিয়ে
          মাত্র কয়েক ক্লিকে তৈরি করুন ই-কমার্স{" "}
          <br className="hidden lg:block font-hind" />
          ওয়েবসাইট বা ল্যান্ডিংপেইজ — অল্প সময়ে, স্বল্প খরচে। Kreta একটি কমপ্লিট
          ই-কমার্স অটোমেশন সিস্টেম।
        </p>
        <CustomAccordion items={data} />
      </div>
    </section>
  );
};

export default FAQ;
