import Banner from "@/components/Pages/LandingPages/Home/Banner";
import Brand from "@/components/Pages/LandingPages/Home/Brand";
import CTA from "@/components/Pages/LandingPages/Home/CTA";
import DemoSlider from "@/components/Pages/LandingPages/Home/DemoSlider";
import Feature from "@/components/Pages/LandingPages/Home/Feature";
import Promotion from "@/components/Pages/LandingPages/Home/Promotion";
import Timeline from "@/components/Pages/LandingPages/Home/Timeline";
import WhyUs from "@/components/Pages/LandingPages/Home/WhyUs";
import FAQ from "@/components/Shared/Components/FAQ";
import ReviewSlider from "@/components/Shared/Components/ReviewSlider";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <WhyUs />
      <Timeline />
      <Feature />
      <DemoSlider />
      <Promotion />
      <Brand />
      <ReviewSlider />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;
