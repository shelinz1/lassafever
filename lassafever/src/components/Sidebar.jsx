import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdNotificationsActive } from "react-icons/md";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userDetails");
    navigate("/login");
  };

  // const { user } = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <div className="max-w-[320px] w-full h-full hidden md:hidden lg:block">
      <div className="left-0 top-auto absolute bg-white shadow ">
        <div className="left-[78px] top-[50px] absolute text-zinc-600 text-[56px] font-bold font-['Inter']">
          LOGO
        </div>

        <Link to={"/"}>
          <button className="w-[300px] h-[52px] p-10  mx-auto left-[18px] top-[400px] absolute bg-emerald-400 rounded-[10px] justify-start items-center gap-5 inline-flex">
            <span className="w-6 h-6 relative text-white">
              <FaHome size={25} />
            </span>

            <span className="text-white text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
              Dashboard
            </span>
          </button>
        </Link>

        <Link to={"/settings"}>
          <button className="w-[300px] h-[52px] mx-auto p-10 left-[18px] top-[536px] absolute bg-neutral-200 rounded-[10px] justify-start items-center gap-5 inline-flex">
            <span className="w-6 h-6 relative text-emerald-400">
              <CiSettings size={25} />
            </span>

            <span className="text-emerald-400 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
              Settings
            </span>
          </button>
        </Link>

        <button
          className="w-[300px] h-[52px] p-10 left-[18px] top-[650px] absolute bg-neutral-200 rounded-[10px] justify-center items-center gap-5 inline-flex"
          onClick={logout}
        >
          <span className="text-emerald-400 text-2xl font-bold font-['Inter'] leading-[13px] tracking-tight">
            Log out
          </span>
        </button>

        <div className="w-[300px] h-[140px] mx-auto left-[18px] top-[200px] absolute bg-emerald-400 rounded-[20px] justify-center items-center inline-flex px-5">
          <div className="justify-start items-center flex">
            <div className="flex-col justify-center items-start gap-2 flex mx-2">
              <div className="text-neutral-100 text-base  font-['Inter'] font-extrabold">
                {/* {user ? user.firstname : "Name"} {user ? user.lastname : "name"} */}
              </div>
              <div className="text-neutral-100 text-base font-extrabold font-['Inter'] ">
                {/* {user ? user.email : "johndoe@gmail.com"}{" "} */}
              </div>
            </div>
          </div>
          <div />
          <span className="w-[50px] h-[50px] relative text-white">
            <MdNotificationsActive size={50} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
