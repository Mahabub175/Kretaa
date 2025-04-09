"use client";

import CustomAccordion from "@/components/Reusable/Accordion/CustomAccordion";
import useFetchData from "@/utils/hooks/useFetchData";

const FAQ = () => {
  const { data } = useFetchData("/faqs");

  return (
    <section className="relative py-20 lg:py-32 bg-primaryLight mt-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/design.png')` }}
      />
      <div className="relative z-10 text-center">
        <h1 className="text-3xl lg:text-6xl font-semibold mb-5 font-bricolage">
          FAQs
        </h1>
        <p className="text-base lg:text-xl text-gray-500 mb-10 lg:mb-20">
          Kretaa gives you the scoop on what customers are really into. By
          diving <br className="hidden lg:block" />
          into social media trends, businesses can tweak their game plans.
        </p>
        <CustomAccordion items={data} />
      </div>
    </section>
  );
};

export default FAQ;
