import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdNotificationsActive } from "react-icons/md";

const Settings = () => {
  return (
    <div className="w-[1728px] h-[2306px] relative bg-neutral-50">
      <div className="w-[474px] h-[1756px] left-0 top-0 absolute bg-white shadow">
        <div className="left-[78px] top-[96px] absolute text-zinc-600 text-[56px] font-bold font-['Inter']">
          LOGO
        </div>

        <Link to={"/"}>
          <button className="w-[442px] h-[52px] p-10 left-[18px] top-[450px] absolute bg-emerald-400 rounded-[10px] justify-start items-center gap-5 inline-flex">
            <span className="w-6 h-6 relative text-white">
              <FaHome size={25} />
            </span>

            <span className="text-white text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
              Dashboard
            </span>
          </button>
        </Link>

        <Link to={"/settings"}>
          <button className="w-[442px] h-[52px] p-10 left-[18px] top-[566px] absolute bg-neutral-200 rounded-[10px] justify-start items-center gap-5 inline-flex">
            <span className="w-6 h-6 relative text-emerald-400">
              <CiSettings size={25} />
            </span>

            <span className="text-emerald-400 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
              Settings
            </span>
          </button>
        </Link>

        <div className="w-[442px] h-[140px] left-[18px] top-[290px] absolute bg-emerald-400 rounded-[20px] justify-center items-center gap-5 inline-flex">
          <div className="justify-start items-center gap-5 flex">
            <div className="flex-col justify-center items-start gap-5 inline-flex">
              <div className="text-neutral-100 text-4xl font-medium font-['Inter'] leading-snug tracking-tight">
                Name Name
              </div>
              <div className="text-neutral-100 text-xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                namenamegmail.com
              </div>
            </div>
          </div>
          <div />
          <span className="w-[50px] h-[50px] relative text-white">
            <MdNotificationsActive size={50} />
          </span>
        </div>

        <button className="w-[442px] h-[52px] p-10 left-[18px] top-[700px] absolute bg-neutral-200 rounded-[10px] justify-center items-center gap-5 inline-flex">
          <span className="text-emerald-400 text-2xl font-bold font-['Inter'] leading-[13px] tracking-tight">
            Log out
          </span>
        </button>
      </div>

      <Footer />

      <div className="left-[607px] top-[189px] absolute flex-col justify-start items-start gap-[66px] inline-flex">
        <div className="w-[1040px] px-5 py-10 bg-white justify-center items-center gap-2.5 inline-flex">
          <div className="w-[1044px] text-emerald-400 text-[40px] font-semibold font-['Inter'] leading-snug tracking-tight">
            Settings
          </div>
        </div>
        <div className="justify-start items-center gap-[817px] inline-flex">
          <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
            Profile{" "}
          </div>

          <Link
            to={"/edit-profile"}
            className="text-white text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight w-[161px] h-16 px-2.5 py-5 bg-emerald-400 rounded-[10px] justify-center items-center gap-2.5 flex cursor-pointer"
          >
            Edit
          </Link>
        </div>
        <div className="pl-[104px] pr-[109px] py-[84px] bg-white rounded-[7px] shadow justify-start items-center inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-12 inline-flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="text-zinc-600 text-base font-medium font-['Inter'] leading-[13px] tracking-tight">
                Full Name
              </div>
              <div className="w-[836px] px-5 py-[30px] bg-neutral-50 rounded-[20px] justify-start items-center gap-[30px] inline-flex">
                <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                  Name Name Name{" "}
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="text-zinc-600 text-base font-medium font-['Inter'] leading-[13px] tracking-tight">
                  Email
                </div>
                <div className="w-[836px] px-5 py-[30px] bg-neutral-50 rounded-[20px] justify-start items-center gap-[30px] inline-flex">
                  <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                    email01@gmail.com{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="text-zinc-600 text-base font-medium font-['Inter'] leading-[13px] tracking-tight">
                Prefered Number
              </div>
              <div className="w-[836px] px-5 py-[30px] bg-neutral-50 rounded-[20px] justify-start items-center gap-[30px] inline-flex">
                <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                  09073648392{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
          <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
            Notification`{" "}
          </div>
        </div>
        <div className="pl-[107px] pr-[106px] pt-[76px] pb-[62px] bg-white rounded-[7px] shadow justify-center items-center inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-12 inline-flex">
            <div className="justify-start items-center gap-[425px] inline-flex">
              <div className="h-[73px] px-5 py-[30px] bg-neutral-50 rounded-[20px] justify-start items-center gap-[30px] flex">
                <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                  Email Notification{" "}
                </div>
              </div>
              <div className="w-[143px] p-5 rounded-[7px] justify-start items-center gap-5 flex">
                <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                  On
                </div>
                <div className="w-[50px] h-[50px] relative origin-top-left rotate-180" />
              </div>
            </div>
            <div className="justify-start items-center gap-[425px] inline-flex">
              <div className="h-[73px] px-5 py-[30px] bg-neutral-50 rounded-[20px] justify-start items-center gap-[30px] flex">
                <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                  SMS Notification{" "}
                </div>
              </div>
              <div className="w-[143px] p-5 rounded-[7px] justify-start items-center gap-5 flex">
                <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                  On
                </div>
                <div className="w-[50px] h-[50px] relative origin-top-left rotate-180" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
