import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pl-52 pr-[212px] py-[125px] left-[5px] top-[2080px] absolute bg-emerald-400 bg-opacity-30 justify-start items-center inline-flex">
      <div className="self-stretch justify-start items-end gap-[346px] inline-flex">
        <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-tight tracking-tight">
          Copyright Ⓒ 2023 Coppy name
          <br /> Limited - RC 883275OPay is a mobile
          <br /> Satistic platform operated by Name
          <br />
          Digital Services Limited. <br />
          Company is licensed by World Health
          <br />
          Organization (WHO) and all details are <br />
          insured by World Health Organization <br />
          (WHO).
        </div>
        <div className="w-[516px] h-[100px] bg-white justify-start items-center flex">
          <span className="w-[100px] h-[100px] py-5  text-blue-300 ">
            <a
              href="https://www.instagram.com/shelinz10/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={50} className="cursor-pointer" />
            </a>
          </span>

          <span className="w-[100px] h-[100px] py-5  text-blue-300">
            <a
              href="https://www.instagram.com/shelinz10/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={50} className="cursor-pointer" />
            </a>
          </span>
          <span className="w-[100px] h-[100px] py-5  text-blue-300">
            <a
              href="https://www.instagram.com/shelinz10/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={50} className="cursor-pointer" />
            </a>
          </span>
          <span className="w-[100px] h-[100px] py-5  text-blue-300">
            <a
              href="https://www.instagram.com/shelinz10/"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter size={50} className="cursor-pointer" />
            </a>
          </span>
          <span className="w-[100px] h-[100px] py-5  text-blue-300">
            <a
              href="https://www.instagram.com/shelinz10/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={50} className="cursor-pointer" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
