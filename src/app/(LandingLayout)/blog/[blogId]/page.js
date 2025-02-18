import SingleBlogDetails from "@/components/Pages/LandingPages/Blog/SingleBlogDetails";

const page = async ({ params }) => {
  const { blogId } = await params;
  return (
    <>
      <SingleBlogDetails params={blogId} />
    </>
  );
};

export default page;
