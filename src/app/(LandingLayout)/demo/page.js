import AllDemo from "@/components/Pages/LandingPages/Demo/AllDemo";
import CTA from "@/components/Pages/LandingPages/Home/CTA";
import FAQ from "@/components/Shared/Components/FAQ";
import ReviewSlider from "@/components/Shared/Components/ReviewSlider";

const page = () => {
  return (
    <>
      <AllDemo />
      <ReviewSlider />
      <FAQ />
      <CTA />
    </>
  );
};

export default page;
