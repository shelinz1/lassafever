import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chart, initTE } from "tw-elements";
import Footer from "../../components/footer/Footer";
import "./dashboard.css";

export default function Dashboard() {
  const [user, setUser] = useState("");
  const { firstname } = user;
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user details from local storage when the component mounts
    const storedUser = localStorage.getItem("userInfo");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      // console.log(parsedUser);

      // Check if firstname is available in user details
      if (parsedUser?.data?.user) {
        setUser(parsedUser.data.user);
      } else {
        // Navigate to the login page if firstname is not available
        navigate("/");
      }
    } else {
      // Navigate to the login page if user details are not available
      navigate("/");
    }

    initTE({ Chart });
  }, [navigate]);

  return (
    <>
      <section className="mb-5">
        <div className="text-emerald-400 font-semibold font-['Inter'] pl-3 dashboard">
          Welcome, {firstname}
        </div>

        <p className="mb-4 mt-0 text-base leading-relaxed font-bold pl-3">
          Showing Metric Overview for the last 7 days{" "}
        </p>

        <div className="grid-container">
          <div className="box bg-gray-100 rounded-[20px]">
            <p className="text-emerald-400 text-2xl font-medium font-['Inter']">
              Total Infected Patient
            </p>
            <p className="text-zinc-600 text-[40px] font-medium font-['Inter']">
              5,240,073
            </p>
          </div>

          <div className="box bg-gray-100 rounded-[20px]">
            <p className="text-indigo-400 text-2xl font-medium font-['Inter']">
              Total Cured Patient
            </p>
            <p className="text-zinc-600 text-[40px] font-medium font-['Inter']">
              5,240,073
            </p>
          </div>

          <div className="box px-5 py-[30px] bg-gray-100 rounded-[20px] ">
            <p className="text-rose-400 text-2xl font-medium font-['Inter']">
              Total Death
            </p>
            <p className="text-zinc-600 text-[40px] font-medium font-['Inter']">
              5,240,073
            </p>
          </div>
        </div>

        {/* CHART TO BE INCLUDED */}

        <div className="mx-auto w-11/12 overflow-hidden md:w-3/5">
          <canvas
            data-te-chart="bar"
            data-te-dataset-label="Outbreak statistics"
            color="yellow"
            data-te-labels="['Lagos',
    'Kano',
    'Abuja',
    'Ogun',
    'Calabar',
    'Edo',
    'Ondo',
    'Taraba']"
            data-te-dataset-data="[10000, 20000, 15000, 35000, 30000, 25000, 20000, 37000]"
          ></canvas>
        </div>

        <p className="mb-4 mt-10 text-base leading-relaxed font-bold text-center">
          Showing Metric Overview for the last 7 days.
        </p>

        {/* CHART TO BE INCLUDED */}
        <div className="mx-auto w-11/12 overflow-hidden md:w-3/5">
          <canvas
            data-te-chart="bar"
            data-te-dataset-label="Outbreak statistics"
            color="yellow"
            data-te-labels="['Lagos',
    'Kano',
    'Abuja',
    'Ogun',
    'Calabar',
    'Edo',
    'Ondo',
    'Taraba']"
            data-te-dataset-data="[10000, 20000, 15000, 35000, 30000, 25000, 20000, 37000]"
          ></canvas>
        </div>
      </section>
      <Footer />
    </>
  );
}
