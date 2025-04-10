import icon1 from "@/assets/images/icon1.png";
import icon2 from "@/assets/images/icon1.png";
import icon3 from "@/assets/images/icon1.png";
import icon4 from "@/assets/images/icon1.png";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: icon1,
    title: "Website Builder",
    description: "Create a website hassle-free",
    gradient: "builder-gradient",
  },
  {
    id: 2,
    image: icon2,
    title: "14+",
    description: "Expert team members",
    gradient: "team-gradient",
  },
  {
    id: 3,
    image: icon3,
    title: "500+",
    description: "Happy Clients",
    gradient: "client-gradient",
  },
  {
    id: 4,
    image: icon4,
    title: "10+",
    description: "Years Experience",
    gradient: "experience-gradient",
  },
];

const SmallFeature = () => {
  return (
    <section className="my-container flex flex-wrap items-end justify-center gap-5 mt-10 lg:mt-20">
      {data?.map((item, index) => (
        <div
          key={item.id}
          className={`${
            item.gradient
          } flex flex-col justify-center items-center gap-5 p-2 lg:p-5 service-radius mx-auto ${
            index === 1 ? "h-[200px] lg:h-[370px]" : "h-[200px] lg:h-[295px]"
          } w-[160px] lg:w-[270px] xxl:w-[320px]`}
        >
          <div
            className={`flex flex-col justify-center items-center text-center h-full ${
              index === 1 ? "lg:translate-y-10" : ""
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-10 h-10 lg:w-16 lg:h-16 mx-auto mb-4"
            />
            <h3 className="text-xl lg:text-3xl font-semibold mb-2">
              {item.title}
            </h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SmallFeature;
