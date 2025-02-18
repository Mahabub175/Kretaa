import AllBlogs from "@/components/Pages/LandingPages/Blog/AllBlogs";
import CTA from "@/components/Pages/LandingPages/Home/CTA";
import Promotion from "@/components/Pages/LandingPages/Home/Promotion";
import FAQ from "@/components/Shared/Components/FAQ";
import ReviewSlider from "@/components/Shared/Components/ReviewSlider";

const page = () => {
  return (
    <>
      <AllBlogs />
      <Promotion />
      <ReviewSlider />
      <FAQ />
      <CTA />
    </>
  );
};

export default page;
