import { assets } from "../assets/assets";
import MoveUpOnRender from "../components/MoveUpOnRender";

const About = () => {
  return (
    <MoveUpOnRender id="about">
      <div>
        <div className="text-center text-2xl pt-10 text-gray-600">
          <p>
            About <span className="text-gray-700 font-medium">US</span>
          </p>
        </div>

        {/*  ---------top section---------*/}
        <div className="my-10 flex flex-col md:flex-row gap-12">
          <img
            className="w-full md:max-w-[360px]"
            src={assets.about_image}
            alt=""
          />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
            <p>
              Welcome to <b>Healthify</b> — your reliable partner in
              simplifying healthcare management. We know how overwhelming it can
              be to juggle appointments, health updates, and doctor
              consultations. That's why we're here — to make your medical
              journey smooth, efficient, and stress-free.
            </p>
            <p>
              At Healthify, we blend technology with compassion. Our platform
              is constantly evolving, integrating the latest advancements to
              offer a seamless and intuitive experience. Whether you're booking
              a consultation, following up on treatment, or organizing health
              records, Healthify is designed to support your healthcare needs
              at every stage.
            </p>
            <b className="text-gray-800">Our Vision</b>
            <p>
              We envision a future where healthcare is not a hassle but a
              harmony — where patients and doctors connect instantly and
              meaningfully. Our goal is to close the gap between care providers
              and those who need care, enabling timely and trusted healthcare
              access for everyone.
            </p>
          </div>
        </div>

        <div className="text-xl my-4 ">
          <p>
            Why <span className="text-gray-700 font-semibold">Choose Us</span>
          </p>

          <div className="flex flex-col md:flex-row mb-20 mt-4">
            <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b>Efficiency:</b>
              <p>Fast, reliable appointment scheduling that adapts to your routine — no more waiting or long calls.</p>
            </div>
            <div className="border px-10 md:px-15 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b>Convenience:</b>
              <p>Discover and connect with qualified doctors and specialists near you, whenever you need.</p>
            </div>
            <div className="border px-10 md:px-15 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b>Personalization:</b>
              <p>Get smart reminders, tailored advice, and customized care — because your health journey is unique.</p>
            </div>
          </div>
        </div>
      </div>
    </MoveUpOnRender>
  );
};

export default About;
