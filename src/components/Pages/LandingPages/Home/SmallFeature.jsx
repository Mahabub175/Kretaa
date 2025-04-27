import icon1 from "@/assets/images/website.png";
import icon2 from "@/assets/images/team.png";
import icon3 from "@/assets/images/satisfied.png";
import icon4 from "@/assets/images/experience.png";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: icon1,
    title: "ওয়েবসাইট বিল্ডার",
    description: "কোডিং ছাড়াই ওয়েবসাইট তৈরির অপশন",
    gradient: "builder-gradient",
  },
  {
    id: 2,
    image: icon2,
    title: "১৪+",
    description: "দক্ষ টিম মেম্বার",
    gradient: "team-gradient",
  },
  {
    id: 3,
    image: icon3,
    title: "৫০০+",
    description: "সন্তুষ্ট গ্রাহক",
    gradient: "client-gradient",
  },
  {
    id: 4,
    image: icon4,
    title: "১০+",
    description: "বছরের অভিজ্ঞতা",
    gradient: "experience-gradient",
  },
];

const SmallFeature = () => {
  return (
    <section className="my-container flex flex-wrap items-end justify-center gap-5 mt-10 lg:mt-20 overflow-hidden lg:h-[350px]">
      {data?.map((item) => (
        <div
          key={item.id}
          className={`
         ${item.gradient}
         flex flex-col justify-center items-center gap-5 p-2 lg:p-5 service-radius mx-auto
         h-[230px] lg:h-[295px]
         w-[160px] md:w-[250px] lg:w-[195px] xl:w-[270px] xxl:w-[330px]
         transition-all duration-500 ease-in-out
        lg:hover:h-[350px]
       `}
        >
          <div
            className={`flex flex-col justify-center items-center text-center h-full`}
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-10 h-10 lg:w-16 lg:h-16 mx-auto mb-4"
            />
            <h3 className="text-xl lg:text-3xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="font-hind">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SmallFeature;
