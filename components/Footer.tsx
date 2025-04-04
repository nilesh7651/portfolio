import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "../data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Reach out to me for a project or{" "}
          <span className="text-purple">tech discussion</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          AI & ML student | Tech Enthusiast & Problem Solver
        </p>
        <a href="mailto:nileshsingh7651@gmail.com">
          <MagicButton
            title="Say Hello!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Nilesh Kumar
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={
                info.id === 1
                  ? "https://github.com/nilesh7651"
                  : info.id === 2
                  ? "https://twitter.com/nileshs15519017"
                  : "https://www.linkedin.com/in/nilesh-kumar-b0a931246"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-purple/20 transition-all duration-300"
            >
              <img src={info.img} alt="social media icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

