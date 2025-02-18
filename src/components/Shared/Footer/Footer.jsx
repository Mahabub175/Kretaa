"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ContactInfo from "./ContactInfo";

const footerData = [
  {
    title: "Customer account",
    links: [
      { name: "Log in", to: "/" },
      { name: "Sign up", to: "/" },
      { name: "Refund Policy", to: "/" },
      { name: "Terms and Conditions", to: "/" },
      { name: "Privacy Policy", to: "/" },
    ],
  },
  {
    title: "Required pages",
    links: [
      { name: "Features", to: "/pricing" },
      { name: "Pricing", to: "/pricing" },
      { name: "Help post", to: "/" },
      { name: "Business Growth", to: "/" },
    ],
  },
  {
    title: "By payment",
    links: [
      { name: "Payments", to: "/" },
      { name: "Refund", to: "/" },
      { name: "Q&A", to: "/" },
      { name: "Privacy Policy", to: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <section className="mb-16 lg:mb-0">
      <footer className="pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-0 xl:gap-10 items-start justify-center my-container">
          <ContactInfo />

          {footerData?.map((item, i) => (
            <div key={i}>
              <h3 className="text-2xl font-bold mb-6">{item?.title}</h3>
              <ul>
                {item?.links?.map((link, j) => (
                  <Link key={j} href={link?.to} className="flex flex-col">
                    <p className="mt-2 hover:underline hover:text-primary duration-300">
                      {link?.name}
                    </p>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="mt-10 border-textColor" />

        <div className="flex flex-col md:flex-row gap-5 lg:gap-0 justify-between items-center py-5 my-container">
          <p className="font-medium">
            ©{new Date().getFullYear()}, All rights reserved By{" "}
            <a
              href="https://vitasoftsolutions.com/"
              target="_blank"
              className="text-primary font-medium hover:underline"
            >
              Vitasoft Solutions
            </a>
          </p>

          <div className="flex gap-5">
            <Link
              href={"/"}
              target="_blank"
              className="flex items-center gap-4"
            >
              <FaFacebook className="text-4xl bg-primary p-2 rounded-full text-white hover:scale-110 duration-300" />
            </Link>
            <Link
              href={"/"}
              target="_blank"
              className="flex items-center gap-4"
            >
              <FaLinkedin className="text-4xl bg-primary p-2 rounded-full text-white hover:scale-110 duration-300" />
            </Link>
            <Link
              href={"/"}
              target="_blank"
              className="flex items-center gap-4"
            >
              <FaInstagram className="text-4xl bg-primary p-2 rounded-full text-white hover:scale-110 duration-300" />
            </Link>
            <Link
              href={"/"}
              target="_blank"
              className="flex items-center gap-4"
            >
              <FaSquareXTwitter className="text-4xl bg-primary p-2 rounded-full text-white hover:scale-110 duration-300" />
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
