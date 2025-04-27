"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`text-center p-6 bg-white rounded-lg shadow-xxl transform transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-6xl font-bold text-red-500 animate-pulse">404</h1>
        <p className="text-xl text-gray-600 mt-2 animate-fadeIn">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
