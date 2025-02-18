import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-primary p-10">
      <div className="my-container text-white flex flex-col items-center">
        <h2 className="text-3xl lg:text-6xl font-bold text-center mb-10">
          An online store for your sustainable <br /> business plan!
        </h2>
        <Link href={"/contact"}>
          <button className="text-white bg-primaryDark px-16 py-3 rounded-lg font-bold">
            Contact
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
