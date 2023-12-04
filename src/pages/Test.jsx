import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import PinInput from "react-pin-input";

export default function Test() {
  return (
    <AuthLayout>
      <h1 className="font-bold text-4xl font-inter text-[#40B885]">
        Authentication
      </h1>

      <div className="mt-12">
        <PinInput
          length={6}
          initialValue=""
          secret={false}
          //   secretDelay={100}
          onChange={(value, index) => {}}
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
        <button className="w-full rounded-md text-white text-2xl font-medium font-inter">
          Sign Up
        </button>
      </div>
    </AuthLayout>
  );
}
