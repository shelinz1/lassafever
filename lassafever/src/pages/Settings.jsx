import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";

const Settings = () => {
  const [user, setUser] = useState("");
  const { firstname, lastname, email, mobileNumber } = user;
  // const { data } = JSON.parse(localStorage.getItem("userDetails"));.

  useEffect(() => {
    // Retrieve user details from local storage when the component mounts
    const storedUser = localStorage.getItem("userInfo");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      // Check if firstname is available in user details
      if (parsedUser?.data?.user) {
        setUser(parsedUser.data.user);
      }
    }
  }, []);

  return (
    <section
      className="
      mx-auto
      min-h-screen
      my-4
      p-4
      sm:px-6
      md:px-8
      lg:px-10"
    >
      <div className="text-emerald-400 text-3xl font-semibold font-inter">
        Settings
      </div>

      {/* <div className=" my-4 sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3 flex justify-between items-center">
        <div className="text-zinc-600 font-bold font-['Inter'] text-2xl">
          Profile
        </div>

        <Link
          to={"/edit-profile"}
          className="text-white text-2xl font-medium font-['Inter'] px-3 py-1 bg-emerald-400 rounded-[10px] cursor-pointer"
        >
          Edit
        </Link>
      </div> */}

      <div className="my-4 sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <div className="text-zinc-600 font-bold font-inter text-2xl mb-2 sm:text-3xl">
          Profile
        </div>
      </div>

      <div className="my-4 sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <div className="lg:w-[800px] lg:h-[400px] sm:w-full sm:h-auto md:w-[700px] mt-5 px-4 sm:px-6 md:px-8 py-6 bg-gray-200 rounded-[7px] shadow-md mx-auto">
          <div className="flex flex-col gap-6 mb-4 items-start justify-center hover:opacity-70 cursor-not-allowed transition">
            <div className="text-zinc-600 text-base font-bold font-['Inter'] leading-[13px] tracking-tight">
              Full Name
            </div>
            <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] px-5 py-[30px] bg-neutral-50 rounded-[20px]">
              <div className="text-zinc-600 text-2xl font-bold font-['Inter'] leading-[13px] tracking-tight">
                {firstname} {lastname}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 mb-4 items-start justify-center hover:opacity-70 cursor-not-allowed transition">
            <div className="text-zinc-600 text-base font-bold font-['Inter'] leading-[13px] tracking-tight">
              Email
            </div>
            <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] px-5 py-[30px] bg-neutral-50 rounded-[20px]">
              <div className="text-zinc-600 text-2xl font-bold font-['Inter'] leading-[13px] tracking-tight">
                {email}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 mb-4 items-start justify-center hover:opacity-70 cursor-not-allowed transition">
            <div className="text-zinc-600 text-base font-bold font-['Inter'] leading-[13px] tracking-tight">
              Preferred Number
            </div>
            <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] px-5 py-[30px] bg-neutral-50 rounded-[20px]">
              <div className="text-zinc-600 text-2xl font-bold font-['Inter'] leading-[13px] tracking-tight">
                {mobileNumber}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 my-4 sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <div className="text-zinc-600 text-2xl font-bold font-['Inter'] mt-5 text-center mb-3">
          Notification
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row mb-5">
          <div className="mb-4 md:mb-0 md:mr-4">
            <div className="bg-gray-200 p-4 rounded-md">
              <div className="text-lg font-semibold">Email Notification</div>
            </div>
          </div>

          <div className="mb-4 md:mb-0 md:mr-4">
            <div className="bg-gray-200 p-4 rounded-md">
              <div className="text-lg font-semibold">On</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Settings;
