import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* --------------left section-------------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Healthify: Connecting doctors and patients through effortless
            appointment scheduling, secure digital prescriptions, and tailored
            healthcare experiences. Because your well-being is our mission.
          </p>
        </div>

        {/* --------------center section-------------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-gray-900">Home</li>
            <li className="hover:text-gray-900">About us</li>
            <li className="hover:text-gray-900">Contact us</li>
            <li className="hover:text-gray-900">Privacy policy</li>
          </ul>
        </div>

        {/* --------------right section-------------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li> Tel: 9876543210</li>
            <li>healthify@help.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* -----------copy right text--------- */}
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2025 - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
