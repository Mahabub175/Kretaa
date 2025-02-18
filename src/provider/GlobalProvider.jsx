"use client";

import LoadingAnimation from "@/components/Shared/Components/LoadingAnimation";
import useFetchData from "@/utils/hooks/useFetchData";
import { Toaster } from "sonner";

const GlobalProvider = ({ children }) => {
  const { loading } = useFetchData("/hero/");
  if (loading)
    return (
      <>
        <LoadingAnimation />
      </>
    );
  return (
    <>
      {" "}
      <Toaster richColors duration={2000} position="top-center" />
      {children}
    </>
  );
};

export default GlobalProvider;
