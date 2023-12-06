import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Settings = () => {
  const { user } = JSON.parse(localStorage.getItem("userDetails"));
  return (
    <div className="w-screen h-screen relative bg-neutral-50">
      <Sidebar />

      <div className="left-[350px] top-[50px] absolute flex-col justify-start items-start gap-[20px] inline-flex">
        <div className=" px-5 py-10 bg-white justify-center items-center gap-2.5 inline-flex">
          <div className="w-[1044px] text-emerald-400 text-[30px] font-semibold font-['Inter'] leading-snug tracking-tight">
            Settings
          </div>
        </div>
        <div className="justify-start items-center gap-[817px] inline-flex">
          <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
            Profile{" "}
          </div>

          <Link
            to={"/edit-profile"}
            className="text-white text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight w-[161px] h-16 px-2.5 py-3  bg-emerald-400 rounded-[10px] justify-center items-center gap-2.5 flex cursor-pointer"
          >
            Edit
          </Link>
        </div>
        <div className="pl-[104px] pr-[109px] py-[84px] bg-white rounded-[7px] shadow justify-start items-center inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-5 inline-flex">
            <div className="flex-col justify-start items-start gap-6 flex cursor-not-allowed">
              <div className="text-zinc-600 text-base font-medium font-['Inter'] leading-[13px] tracking-tight">
                Full Name
              </div>
              <div className="w-[836px] px-5 py-[30px] bg-neutral-50 rounded-[20px] justify-start items-center gap-[30px] inline-flex">
                <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                  {user.firstname} {user.lastName}
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex cursor-not-allowed">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="text-zinc-600 text-base font-medium font-['Inter'] leading-[13px] tracking-tight">
                  Email
                </div>
                <div className="w-[836px] px-5 py-[30px] bg-neutral-50 rounded-[20px] justify-start items-center gap-[30px] inline-flex">
                  <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                    {user.email}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex cursor-not-allowed">
              <div className="text-zinc-600 text-base font-medium font-['Inter'] leading-[13px] tracking-tight">
                Prefered Number
              </div>
              <div className="w-[836px] px-5 py-[30px] bg-neutral-50 rounded-[20px] justify-start items-center gap-[30px] inline-flex">
                <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                  {user.mobileNumber}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
          <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
            Notification
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
