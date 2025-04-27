"use client";

import { useRef } from "react";
import CustomInput from "@/components/Reusable/Form/CustomInput";
import { base_url } from "@/utils/configs/base_api";
import { toast } from "sonner";
import useFullUrl from "@/utils/hooks/useGetURL";
import useConversionApi from "@/utils/hooks/useConversionApi";
import { sendGTMEvent } from "@next/third-parties/google";
import { useEffect } from "react";

const ContactForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const numberRef = useRef(null);
  const businessNameRef = useRef(null);
  const messageRef = useRef(null);

  const url = useFullUrl();
  const { postData } = useConversionApi();

  useEffect(() => {
    sendGTMEvent({ event: "InitiateCheckout", value: url });
    const data = {
      event_name: "InitiateCheckout",
      event_source_url: url,
    };
    postData(data);
  }, [url]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const [firstName, lastName = ""] = name.split(" ");

    const email = emailRef.current.value || `${firstName}@gmail.com`;

    const formData = {
      name: name,
      phone_number: numberRef.current.value,
      email: email,
      business_name: businessNameRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const response = await fetch(`${base_url}/contacts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = {
          event_name: "Lead",
          event_source_url: url,
          user_data: {
            fn: [firstName],
            ln: [lastName],
            em: [email],
            ph: [numberRef.current.value],
            ct: ["Dhaka"],
            st: ["Dhaka"],
            zp: ["1207"],
            country: ["BD"],
          },
          custom_data: {
            value: 200,
            currency: "BDT",
          },
        };
        postData(data);
        toast.success("Message sent successfully!");
        nameRef.current.value = "";
        numberRef.current.value = "";
        emailRef.current.value = "";
        businessNameRef.current.value = "";
        messageRef.current.value = "";
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="relative mb-12 lg:mb-44 bg-primaryLight">
      <div className="my-container flex flex-col lg:flex-row items-start gap-10 font-hind translate-y-10 lg:translate-y-20">
        <div className="text-center lg:text-start lg:w-3/6">
          <h1 className="text-4xl lg:text-6xl font-semibold mb-4 font-hind">
            <span className="font-bold text-primary">Kretaa </span>
            কি?
          </h1>
          <p className="text-base lg:text-lg">
            <span className="text-primary font-semibold">Kretaa </span>–
            <span className="font-semibold">
              ই-কমার্স অটোমেশনের সহজতম সমাধান!
            </span>{" "}
            <br /> টেকনিক্যাল স্কিল ছাড়াই এখন মাত্র কয়েক মিনিটেই তৈরি করুন
            আপনার নিজের ল্যান্ডিং পেজ বা ফুল ফিচার্ড ওয়েবসাইট। স্বল্প খরচে, কম
            সময়ে ব্যবসা শুরু করুন, আর Kretaa-এর অটোমেটেড সিস্টেম দিয়ে দিন-দিন
            বাড়ান লাভ। ব্যবসা চালানো হোক সহজ, স্মার্ট আর সম্পূর্ণ আপনার
            নিয়ন্ত্রণে।
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-10 rounded-lg w-full lg:w-3/6 shadow-xl"
        >
          <CustomInput
            name="name"
            placeholder="আপনার নাম লিখুন"
            ref={nameRef}
            required
          />
          <CustomInput
            name="number"
            type="number-string"
            placeholder="মোবাইল নাম্বার লিখুন"
            ref={numberRef}
            required
          />

          <div className="grid lg:grid-cols-2 gap-4">
            <CustomInput
              name="email"
              type="email"
              placeholder="ইমেইল এড্রেস লিখুন"
              ref={emailRef}
            />
            <CustomInput
              name="businessName"
              placeholder="ব্যবসা প্রতিষ্ঠানের নাম লিখুন"
              ref={businessNameRef}
              required
            />
          </div>
          <CustomInput
            name="message"
            type="textarea"
            placeholder="আপনার মূল্যবান প্রশ্নটি করুন"
            ref={messageRef}
            required
          />
          <button
            type="submit"
            className="px-4 py-3 bg-primary font-medium text-white rounded-lg w-full"
          >
            সাবমিট করুন
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
