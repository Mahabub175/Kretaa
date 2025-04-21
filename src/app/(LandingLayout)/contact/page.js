import ContactForm from "@/components/Pages/LandingPages/Contact/ContactForm";
import home from "@/assets/images/home.png";
import phone from "@/assets/images/phone.png";
import message from "@/assets/images/message.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <ContactForm />
      <div className="my-container mt-10 flex flex-col lg:flex-row lg:gap-10 mb-10">
        <div className="my-20 flex flex-col justify-between gap-8 lg:gap-10 w-full font-hind">
          <div className="flex items-center gap-4">
            <Image src={phone} alt="home" className="w-14 h-14" />
            <div>
              <p className="text-xl lg:text-2xl font-semibold mb-2">
                আমাদের ফোন নাম্বার
              </p>
              <a
                href="tel:+8801328885839"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +880 1328-885839
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Image src={message} alt="home" className="w-14 h-14" />
            <div>
              <p className="text-lg font-semibold mb-2">আমাদের ইমেইল এড্রেস</p>
              <a
                href="mailto:vitasoftsolution@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                vitasoftsolution@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image src={home} alt="home" className="w-14 h-14" />
            <div>
              <p className="text-xl lg:text-2xl font-semibold mb-2">
                আমাদের ঠিকানা
              </p>
              <a
                href="https://maps.app.goo.gl/vzqh6ULLTDz47uFb6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Corporate office 677, Brothers Tower, East Dholaipar, Kadamtoli,
                Dhaka-1236
              </a>
            </div>
          </div>
        </div>
        <div className="h-50 w-0.5 bg-primaryLight hidden lg:block"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.2521843216814!2d90.43924782017679!3d23.70268675605991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4a175d275fafac69%3A0xd871af27aa650ae7!2sVitasoft%20Solutions!5e0!3m2!1sen!2sbd!4v1723446649554!5m2!1sen!2sbd"
          style={{ border: "0" }}
          className="focus:outline-none mx-auto w-full lg:w-5/6 h-[450px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default page;
