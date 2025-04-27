"use client";

import { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const links = [
  { name: "হোম", link: "/" },
  // { name: "Customer", link: "/customer" },
  { name: "প্রাইসিং", link: "/pricing" },
  { name: "ডেমো", link: "/demo" },
  { name: "হেল্প সেন্টার", link: "/blog" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // const { data } = useFetchData("/system-assets/");

  return (
    <nav className="sticky top-0 w-full z-50 py-4 lg:py-5 bg-white shadow">
      <div className="my-container flex items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>

        <div className="hidden lg:flex space-x-10 bg-primaryLight px-10 py-3 rounded-full">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className={`duration-300 font-medium font-hind ${
                pathname === link?.link
                  ? "text-white blue-gradient rounded-full px-5 py-1"
                  : "py-1 hover:text-primary"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Link href="/contact">
            <button
              className={`font-hind border border-primary px-10 py-2 rounded-full font-medium duration-300 ${
                pathname === "/contact"
                  ? "bg-primary text-white"
                  : "bg-primaryLight text-primary hover:bg-primary hover:text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              বিস্তরিত জানুন
            </button>
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross1 size={24} /> : <IoMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden flex flex-col items-center space-y-4 mt-4 p-4 bg-white shadow-lg"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className={`duration-300 font-medium font-hind ${
                  pathname === link?.link
                    ? "text-white blue-gradient rounded-full px-5 py-1"
                    : "py-1 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <button
                className={`font-hind border border-primary px-10 py-2 rounded-full font-medium duration-300 ${
                  pathname === "/contact"
                    ? "bg-primary text-white"
                    : "bg-primaryLight text-primary hover:bg-primary hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                বিস্তরিত জানুন
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
