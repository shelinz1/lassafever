import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import PinInput from "react-pin-input";
import axios from "axios";
import Toast from "../components/Toast";
import { toast } from "react-toastify";

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
        "https://lassa-alert-system-29e01ab50dd3.herokuapp.com/api/v1/otp",
        {
          otpCode: pin,
        }
      );
      // console.log("Login successful:", response.data);
      setLoading(false);
      // Perform actions after successful login (redirect, etc.)
      toast.success(`${response.data.message}`, ToastObjects);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setLoading(false);
      // console.log("Login error:", error);
      toast.error(`${error.response.data.message}`, ToastObjects);
      // Handle login failure (display error, reset PIN input, etc.)
    }
  };

  return (
    <AuthLayout>
      <Toast />

      <h1 className="font-bold text-4xl font-inter text-[#40B885]">
        Authentication
      </h1>

      <div className="mt-12">
        <PinInput
          length={6}
          initialValue=""
          secret={false}
          //   secretDelay={100}

          onChange={(value) => setPin(value)}
          type="numeric"
          inputMode="number"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          inputStyle={{
            borderColor: "green",
            backgroundColor: "#D8D8D8",
            borderRadius: "8px",
            width: "100px",
            height: "100px",
            fontSize: "2rem",
          }}
          inputFocusStyle={{ borderColor: "green" }}
          onComplete={(value, index) => {}}
          autoSelect={true}
          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />
      </div>

      <div className="mt-12">
        <span className="text-zinc-600 text-base font-medium font-['Inter'] leading-[13px] tracking-tight">
          Didn,t get a code after 30 secs?,{" "}
        </span>
        <button className="text-emerald-400 text-base font-bold font-['Inter'] leading-[13px] tracking-tight">
          Resend
        </button>
      </div>

      <div className="mt-12 px-2.5 py-5 bg-emerald-400 rounded-[10px]">
        {loading ? (
          <>
            <button
              disabled
              className="w-full rounded-md text-white text-2xl font-medium font-inter"
            >
              <span className="text-white text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                Loading...
              </span>
            </button>
          </>
        ) : (
          <button
            className="w-full rounded-md text-white text-2xl font-medium font-inter"
            onClick={authLogin}
          >
            Sign Up
          </button>
        )}
      </div>
    </AuthLayout>
  );
}
