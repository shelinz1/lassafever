import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";
import axios from "axios";
import Toast from "../components/Toast";
import { toast } from "react-toastify";
import Footer from "../components/footer/Footer";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 5000,
};

export default function Test() {
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  // console.log(pin);

  const navigate = useNavigate();

  const authLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        "https://lassa-alert-system-1d7a7ac7a794.herokuapp.com/api/v1/otp",
        {
          otpCode: pin,
        }
      );
      console.log("Login successful:", response.data);
      setLoading(false);
      // Perform actions after successful login (redirect, etc.)
      toast.success(`${response.data.message}`, ToastObjects);

      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      toast.error(`${error.response.data.message}`, ToastObjects);
      // Handle login failure (display error, reset PIN input, etc.)
    }
  };

  return (
    <>
      <Toast />
      <div className="flex flex-col items-center justify-center mb-5 py-40">
        <h1 className="font-bold text-4xl font-inter text-[#40B885] mt-3">
          Authentication
        </h1>

        <div className="mt-12 mx-4 sm:mx-16 lg:mx-32">
          <PinInput
            length={6}
            initialValue=""
            secret={false}
            onChange={(value) => setPin(value)}
            type="numeric"
            inputMode="number"
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            inputStyle={{
              borderColor: "green",
              backgroundColor: "#D8D8D8",
              borderRadius: "8px",
              width: "100%",
              height: "100%",
              fontSize: "2rem",
            }}
            inputFocusStyle={{ borderColor: "green" }}
            onComplete={(value, index) => {}}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
        </div>

        <div className="mt-5 p-3 text-center">
          <span className="text-zinc-600 text-base font-medium font-['Inter'] leading-[13px] tracking-tight">
            Didn't get a code after 30 secs?,{" "}
          </span>
          <button className="text-emerald-400 text-base font-bold font-['Inter'] leading-[13px] tracking-tight">
            Resend
          </button>
        </div>

        {loading ? (
          <>
            <button
              disabled
              className="w-full sm:w-[400px] h-16 px-2.5 py-5 rounded-md text-white text-2xl font-medium font-inter bg-emerald-400"
            >
              <span className="text-white text-2xl font-medium font-['Inter']">
                Loading...
              </span>
            </button>
          </>
        ) : (
          <button
            className="w-full sm:w-[400px] p-3 rounded-md text-white text-2xl font-medium font-inter bg-emerald-400"
            onClick={authLogin}
          >
            Sign Up
          </button>
        )}
      </div>
      <Footer />
    </>
  );
}
