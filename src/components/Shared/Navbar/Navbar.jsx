"use client";

import { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", link: "/" },
  { name: "Feature", link: "/feature" },
  { name: "Customer", link: "/customer" },
  { name: "Pricing", link: "/pricing" },
  { name: "Demo", link: "/demo" },
  { name: "Blog", link: "/blog" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // const { data } = useFetchData("/system-assets/");

  return (
    <nav className="sticky top-0 w-full z-50 py-3 lg:py-5 bg-white shadow">
      <div className="my-container flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold text-primary">Kretaa</span>
        </Link>

        <div className="hidden lg:flex space-x-10 bg-primaryLight px-10 py-3 rounded-full">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className={`hover:text-primary duration-300 font-medium ${
                pathname === link?.link
                  ? "text-white blue-gradient rounded-full px-5 py-1"
                  : "py-1"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Link href="/contact">
            <button className="text-primary bg-primaryLight border border-primary hover:bg-primary hover:text-white duration-300 px-10 py-2 rounded-full font-medium">
              Contact
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
            className="md:hidden flex flex-col space-y-4 mt-4 p-4 bg-white shadow-lg"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="hover:text-primary duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <button className="text-primary bg-primaryLight border border-primary hover:bg-primary hover:text-white duration-300 px-10 py-2 rounded-full font-medium">
                Contact
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
