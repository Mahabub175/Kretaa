import DynamicPage from "@/components/Pages/LandingPages/DynamicPage/DynamicPage";

const page = async ({ params }) => {
  const { slug } = await params;

  return (
    <>
      <DynamicPage params={slug} />
    </>
  );
};

export default page;
