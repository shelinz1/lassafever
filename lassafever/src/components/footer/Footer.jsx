import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
      <div className="container p-6 text-neutral-800 dark:text-neutral-200">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="mb-6 md:mb-0">
            <p className="mb-4">
              Copyright Ⓒ 2023 Coppy name Limited - RC 883275OPay is a mobile
              Satistic platform operated by Name Digital Services Limited.
              Company is licensed by World Health Organization (WHO) and all
              details are insured by World Health Organization (WHO).
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <div className="mb-4">
              <div className="socials justify-center items-center flex gap-3">
                <span className=" p-2  text-blue-300 ">
                  <a
                    href="https://www.instagram.com/shelinz10/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF size={30} className="cursor-pointer" />
                  </a>
                </span>

                <span className=" p-2  text-blue-300">
                  <a
                    href="https://www.instagram.com/shelinz10/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram size={30} className="cursor-pointer" />
                  </a>
                </span>
                <span className=" p-2  text-blue-300">
                  <a
                    href="https://www.instagram.com/shelinz10/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin size={30} className="cursor-pointer" />
                  </a>
                </span>
                <span className=" p-2  text-blue-300">
                  <a
                    href="https://www.instagram.com/shelinz10/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaXTwitter size={30} className="cursor-pointer" />
                  </a>
                </span>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
