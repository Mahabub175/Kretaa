import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-primary py-20 lg:py-32">
      <div className="my-container text-white flex flex-col items-center text-center font-hind">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6 font-hind">
          আপনার ব্র্যান্ড গড়ে তুলুন ডিজিটাল দুনিয়ায় — Kretaa-এর সাথে
        </h2>
        <p className="text-lg">
          হাজারো সফল উদ্যোক্তার সাথে এবার আপনার পালা — শুরু করুন আজই।
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-10">
          <Link href={"/contact"}>
            <button className="text-primary bg-white border border-white hover:bg-primary hover:text-white duration-300 px-14 py-2.5 rounded-full font-medium">
              ফ্রি একাউন্ট খুলুন
            </button>
          </Link>
          <Link href={"/contact"}>
            <button className="text-white bg-transparent border border-white hover:bg-white hover:text-primary duration-300 px-14 py-2.5 rounded-full font-medium">
              ডেমোর জন্য শিডিউল বুক করুন
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
