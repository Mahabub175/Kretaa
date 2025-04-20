import Link from "next/link";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="px-5 font-hind">
      <div className="mb-10">
        <Link href="/">
          <span className="text-xl font-bold text-primary">Kretaa</span>
        </Link>
      </div>
      <h3 className="text-lg font-bold mb-6">নিড হেল্প?</h3>
      <div className="flex items-center gap-2 -mt-2">
        <FaLocationDot className="text-primary" />
        <p className="text-grey-400">
          ব্রাদার্স টাওয়ার, কর্পোরেট অফিস ৬৭৭, পূর্ব দনিয়া, ধোলাইপাড় রোড, ঢাকা
          -১২৩৬
        </p>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <FaPhone className="text-primary" />
        <p className="text-grey-400">0100 000 0000</p>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <MdEmail className="text-primary" />
        <p className="text-grey-400">kretaa@mail.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
