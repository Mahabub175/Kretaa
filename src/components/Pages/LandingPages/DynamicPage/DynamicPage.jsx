"use client";

import LoadingAnimation from "@/components/Shared/Components/LoadingAnimation";
import useFetchData from "@/utils/hooks/useFetchData";
import { notFound } from "next/navigation";

const DynamicPage = ({ params }) => {
  const { data, loading } = useFetchData(`/pages/`);

  if (loading) return <LoadingAnimation />;

  const pageData = data?.find((item) => item?.slug == params?.[0]);

  if (!pageData) return notFound();

  return (
    <div className="mt-5 lg:mt-10 mb-20 my-container">
      <div dangerouslySetInnerHTML={{ __html: pageData?.description }} />
    </div>
  );
};

export default DynamicPage;
