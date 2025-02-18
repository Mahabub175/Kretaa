import icon1 from "@/assets/images/icon1.png";
import icon2 from "@/assets/images/icon2.png";
import icon3 from "@/assets/images/icon3.png";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: icon1,
    title: "Website Builder",
    description: "Option to create a website without coding.",
  },
  {
    id: 2,
    image: icon2,
    title: "Website Builder",
    description: "Option to create a website without coding.",
  },
  {
    id: 3,
    image: icon3,
    title: "Website Builder",
    description: "Option to create a website without coding.",
  },
];

const SmallFeature = () => {
  return (
    <section className="bg-primary p-10 rounded-xl gap-16 lg:gap-0 flex flex-col lg:flex-row justify-between items-center my-container">
      {data.map((item) => (
        <div key={item.id} className="flex items-center gap-5">
          <Image src={item.image} alt="" className="w-16 h-16" />
          <div>
            <h3 className="text-white text-xl font-semibold">{item.title}</h3>
            <p className="text-white text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SmallFeature;
