import Link from "next/link";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="">
      <div className="mb-10">
        <Link href="/">
          <span className="text-xl font-bold text-primary">Kretaa</span>
        </Link>
      </div>
      <h3 className="text-lg font-bold mb-6">Need help?</h3>
      <div className="flex items-center gap-2 -mt-2">
        <FaLocationDot className="text-primary" />
        <p className="text-grey-400">
          <span className="font-semibold">Address: </span>
          Kretaa Address
        </p>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <FaPhone className="text-primary" />
        <p className="text-grey-400">
          <span className="font-semibold">Phone:</span> 07xxxxxxxxx
        </p>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <MdEmail className="text-primary" />
        <p className="text-grey-400">
          <span className="font-semibold">Email:</span> kretaa@mail.com
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
