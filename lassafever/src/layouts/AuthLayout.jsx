import React from "react";

export default function AuthLayout({ children }) {
  return (
    <section className="w-screen h-screen flex gap-10 items-center">
      <div className="max-w-[320px] w-full h-full bg-[#40B885]"></div>

      <div className="w-full">
        <div className="max-w-[780px] w-full mx-auto">{children}</div>
      </div>
    </section>
  );
}
