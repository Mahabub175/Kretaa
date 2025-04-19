"use client";

import { useRef } from "react";
import CustomInput from "@/components/Reusable/Form/CustomInput";
import circle from "@/assets/images/circle.png";
import Image from "next/image";
import { base_url } from "@/utils/configs/base_api";
import { toast } from "sonner";
const ContactForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const numberRef = useRef(null);
  const businessNameRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      phone_number: numberRef.current.value,
      email: emailRef.current.value,
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
    <section className="max-w-4xl px-5 mx-auto my-5 lg:my-10 relative -mb-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl lg:text-5xl font-semibold mb-4 font-hind">
          What is <span className="font-bold text-primary">Kretaa?</span>
        </h1>
        <p className="text-sm lg:text-base">
          Kretaa is an easy e-commerce automation tool that helps you quickly
          create landing pages and websites without any tech skills. It
          simplifies your online business, saves time, and cuts costs so you can
          start earning.
        </p>
      </div>
      <Image
        src={circle}
        alt="circle"
        className="absolute top-32 right-10 -z-10"
      />
      <Image
        src={circle}
        alt="circle"
        className="absolute -bottom-16 left-16 -z-10"
      />
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-primaryLight px-5 py-10 lg:p-10 rounded-xl max-w-2xl mx-auto z-10 my-10 lg:my-20"
      >
        <CustomInput
          name="name"
          placeholder="Your name"
          ref={nameRef}
          required
        />
        <CustomInput
          name="number"
          type="number"
          placeholder="Your phone number"
          ref={numberRef}
          required
        />

        <div className="grid lg:grid-cols-2 gap-4">
          <CustomInput
            name="email"
            type="email"
            placeholder="Your email"
            ref={emailRef}
            required
          />
          <CustomInput
            name="businessName"
            placeholder="Your business name"
            ref={businessNameRef}
            required
          />
        </div>
        <CustomInput
          name="message"
          type="textarea"
          placeholder="Your message"
          ref={messageRef}
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary font-medium text-white rounded-lg w-full"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
