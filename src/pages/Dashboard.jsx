import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user details from local storage when the component mounts
    const storedUserDetails = localStorage.getItem("userDetails");

    if (storedUserDetails) {
      // If user details are found in local storage, parse and set them in state
      setUser(JSON.parse(storedUserDetails));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <section className="w-screen h-screen flex gap-10 items-center">
      <Sidebar />

      <div className="w-full">
        <div className="max-w-[780px] w-full mx-auto">
          <Footer />

          <div className="left-[604px] top-[100px] absolute flex-col justify-start items-start gap-[53px] inline-flex">
            <div className="text-emerald-400 text-[40px] font-semibold font-['Inter'] leading-snug tracking-tight">
              Dashboard
            </div>
            <div className="justify-start items-center gap-[356px] inline-flex">
              <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                Showing Metric Overview for the last 7 days{" "}
              </div>
              <div className="w-[186px] p-5 bg-white rounded-[7px] justify-start items-center gap-5 flex">
                <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                  7 days
                </div>
                <div className="w-[50px] h-[50px] relative origin-top-left rotate-180" />
              </div>
            </div>
            <div className="w-[1049px] justify-start items-start gap-[30px] inline-flex">
              <div className="w-[510px] px-5 py-[30px] bg-white rounded-[20px] shadow flex-col justify-start items-start gap-[30px] inline-flex">
                <div className="text-emerald-400 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                  Total Infected patient{" "}
                </div>
                <div className="text-zinc-600 text-[40px] font-medium font-['Inter'] leading-snug tracking-tight">
                  5,240,073
                </div>
              </div>
              <div className="w-[510px] px-5 py-[30px] bg-white rounded-[20px] shadow flex-col justify-start items-start gap-[30px] inline-flex">
                <div className="text-emerald-400 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                  Total Death{" "}
                </div>
                <div className="text-zinc-600 text-[40px] font-medium font-['Inter'] leading-snug tracking-tight">
                  5,240,073
                </div>
              </div>
              <div className="w-[509px] px-5 py-[30px] bg-white rounded-[20px] shadow flex-col justify-start items-start gap-[30px] inline-flex">
                <div className="text-indigo-500 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                  Total Cured Patient
                </div>
                <div className="text-zinc-600 text-[40px] font-medium font-['Inter'] leading-snug tracking-tight">
                  5,240,073
                </div>
              </div>
            </div>
            <div className="px-[15px] pt-10 pb-[61px] bg-white rounded-[7px] shadow justify-center items-center inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-[81px] inline-flex">
                <div className="justify-start items-start gap-[274px] inline-flex">
                  <div className="justify-start items-center gap-[25px] flex">
                    <div className="w-[22px] h-[22px] bg-emerald-400 rounded-full" />
                    <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                      Female{" "}
                    </div>
                  </div>
                  <div className="justify-start items-center gap-[25px] flex">
                    <div className="w-[22px] h-[22px] bg-indigo-500 rounded-full" />
                    <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                      Male{" "}
                    </div>
                  </div>
                </div>
                <div className="w-[1019px] h-[305px] relative">
                  <div className="h-[45.02px] left-[99.15px] top-[251.62px] absolute">
                    <div className="w-[794.11px] h-[45.02px] left-[59.06px] top-0 absolute">
                      <div className="w-[12.20px] h-[45.02px] left-0 top-0 absolute">
                        <div className="w-[12.20px] h-[22.88px] left-0 top-[22.14px] absolute text-center text-black text-xs font-normal font-['Inter']">
                          0
                        </div>
                      </div>
                      <div className="w-[9.15px] h-[45.02px] left-[131.84px] top-0 absolute">
                        <div className="w-[9.15px] h-[22.88px] left-0 top-[22.14px] absolute text-center text-black text-xs font-normal font-['Inter']">
                          1
                        </div>
                      </div>
                      <div className="w-[12.20px] h-[45.02px] left-[260.63px] top-0 absolute">
                        <div className="w-[12.20px] h-[22.88px] left-0 top-[22.14px] absolute text-center text-black text-xs font-normal font-['Inter']">
                          2
                        </div>
                      </div>
                      <div className="w-[12.20px] h-[45.02px] left-[390.95px] top-0 absolute">
                        <div className="w-[12.20px] h-[22.88px] left-[-0px] top-[22.14px] absolute text-center text-black text-xs font-normal font-['Inter']">
                          3
                        </div>
                      </div>
                      <div className="w-[12.20px] h-[45.02px] left-[521.27px] top-0 absolute">
                        <div className="w-[12.20px] h-[22.88px] left-0 top-[22.14px] absolute text-center text-black text-xs font-normal font-['Inter']">
                          4
                        </div>
                      </div>
                      <div className="w-[12.20px] h-[45.02px] left-[651.58px] top-0 absolute">
                        <div className="w-[12.20px] h-[22.88px] left-[-0px] top-[22.14px] absolute text-center text-black text-xs font-normal font-['Inter']">
                          5
                        </div>
                      </div>
                      <div className="w-[12.20px] h-[45.02px] left-[781.90px] top-0 absolute">
                        <div className="w-[12.20px] h-[22.88px] left-[-0px] top-[22.14px] absolute text-center text-black text-xs font-normal font-['Inter']">
                          6
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[106.78px] h-[260.49px] left-[-7.63px] top-[2.21px] absolute">
                    <div className="w-[106.78px] h-[260.49px] left-0 top-0 absolute">
                      <div className="w-[28.98px] h-[22.88px] left-[77.80px] top-[237.61px] absolute">
                        <div className="w-[12.20px] h-[22.88px] left-0 top-0 absolute text-right text-black text-xs font-normal font-['Inter']">
                          0
                        </div>
                      </div>
                      <div className="w-[97.63px] h-[22.88px] left-[9.15px] top-[176.61px] absolute">
                        <div className="w-[80.85px] h-[22.88px] left-0 top-0 absolute text-right text-black text-xs font-normal font-['Inter']">
                          2500000
                        </div>
                      </div>
                      <div className="w-[97.63px] h-[22.88px] left-[9.15px] top-[115.61px] absolute">
                        <div className="w-[80.85px] h-[22.88px] left-0 top-0 absolute text-right text-black text-xs font-normal font-['Inter']">
                          5000000
                        </div>
                      </div>
                      <div className="w-[96.10px] h-[22.88px] left-[10.68px] top-[54.61px] absolute">
                        <div className="w-[79.32px] h-[22.88px] left-0 top-0 absolute text-right text-black text-xs font-normal font-['Inter']">
                          7500000
                        </div>
                      </div>
                      <div className="w-[106.78px] h-[22.88px] left-0 top-0 absolute">
                        <div className="w-[90px] h-[22.88px] left-0 top-0 absolute text-right text-black text-xs font-normal font-['Inter']">
                          10000000
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[830.72px] h-[219.81px] left-[112.19px] top-[31.81px] absolute"></div>
                  <div className="w-[830.72px] h-[236.45px] left-[167.10px] top-[15.18px] absolute"></div>
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-[413px] inline-flex">
              <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                Predicted Outbreak for the next 7 days{" "}
              </div>
              <div className="w-[186px] p-5 bg-white rounded-[7px] justify-start items-center gap-5 flex">
                <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                  7 days
                </div>
                <div className="w-[50px] h-[50px] relative origin-top-left rotate-180" />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="pl-[30px] pr-[86px] pt-[159px] pb-24 bg-white rounded-[7px] shadow justify-start items-center inline-flex">
                <div className="self-stretch justify-start items-start gap-[120px] inline-flex">
                  <div className="w-[611px] h-[183px] relative">
                    <div className="h-[27.01px] left-[59.45px] top-[150.98px] absolute">
                      <div className="w-[476.15px] h-[27.01px] left-[35.41px] top-0 absolute">
                        <div className="w-[7.32px] h-[27.01px] left-0 top-0 absolute">
                          <div className="w-[7.32px] h-[13.73px] left-0 top-[13.29px] absolute text-center text-black text-xs font-normal font-['Inter']">
                            0
                          </div>
                        </div>
                        <div className="w-[5.49px] h-[27.01px] left-[79.05px] top-0 absolute">
                          <div className="w-[5.49px] h-[13.73px] left-0 top-[13.29px] absolute text-center text-black text-xs font-normal font-['Inter']">
                            1
                          </div>
                        </div>
                        <div className="w-[7.32px] h-[27.01px] left-[156.28px] top-0 absolute">
                          <div className="w-[7.32px] h-[13.73px] left-0 top-[13.29px] absolute text-center text-black text-xs font-normal font-['Inter']">
                            2
                          </div>
                        </div>
                        <div className="w-[7.32px] h-[27.01px] left-[234.42px] top-0 absolute">
                          <div className="w-[7.32px] h-[13.73px] left-[-0px] top-[13.29px] absolute text-center text-black text-xs font-normal font-['Inter']">
                            3
                          </div>
                        </div>
                        <div className="w-[7.32px] h-[27.01px] left-[312.56px] top-0 absolute">
                          <div className="w-[7.32px] h-[13.73px] left-0 top-[13.29px] absolute text-center text-black text-xs font-normal font-['Inter']">
                            4
                          </div>
                        </div>
                        <div className="w-[7.32px] h-[27.01px] left-[390.70px] top-0 absolute">
                          <div className="w-[7.32px] h-[13.73px] left-[-0px] top-[13.29px] absolute text-center text-black text-xs font-normal font-['Inter']">
                            5
                          </div>
                        </div>
                        <div className="w-[7.32px] h-[27.01px] left-[468.83px] top-0 absolute">
                          <div className="w-[7.32px] h-[13.73px] left-[-0px] top-[13.29px] absolute text-center text-black text-xs font-normal font-['Inter']">
                            6
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[156.29px] left-[-4.57px] top-[1.33px] absolute">
                      <div className="w-16 h-[156.29px] left-0 top-0 absolute">
                        <div className="w-[17.38px] h-[13.73px] left-[46.65px] top-[142.57px] absolute">
                          <div className="w-[7.32px] h-[13.73px] left-0 top-0 absolute text-right text-black text-xs font-normal font-['Inter']">
                            0
                          </div>
                        </div>
                        <div className="w-[58.54px] h-[13.72px] left-[5.49px] top-[105.97px] absolute">
                          <div className="w-[48.48px] h-[13.72px] left-0 top-0 absolute text-right text-black text-xs font-normal font-['Inter']">
                            2500000
                          </div>
                        </div>
                        <div className="w-[58.54px] h-[13.72px] left-[5.49px] top-[69.37px] absolute">
                          <div className="w-[48.48px] h-[13.72px] left-0 top-0 absolute text-right text-black text-xs font-normal font-['Inter']">
                            5000000
                          </div>
                        </div>
                        <div className="w-[57.62px] h-[13.73px] left-[6.40px] top-[32.77px] absolute">
                          <div className="w-[47.56px] h-[13.73px] left-0 top-0 absolute text-right text-black text-xs font-normal font-['Inter']">
                            7500000
                          </div>
                        </div>
                        <div className="w-16 h-[13.73px] left-0 top-0 absolute">
                          <div className="w-[53.97px] h-[13.73px] left-0 top-0 absolute text-right text-black text-xs font-normal font-['Inter']">
                            10000000
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[498.10px] h-[131.89px] left-[67.27px] top-[19.09px] absolute"></div>
                    <div className="w-[498.10px] h-[141.87px] left-[100.20px] top-[9.11px] absolute"></div>
                  </div>
                  <div className="w-[202px] h-[202px] relative">
                    <div className="w-[61px] h-[15px] left-[70px] top-[64px] absolute text-indigo-500 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                      54%{" "}
                    </div>
                    <div className="w-[61px] h-4 left-[70px] top-[126px] absolute text-emerald-400 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                      46%{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-[274px] inline-flex">
                <div className="justify-start items-center gap-[25px] flex">
                  <div className="w-[22px] h-[22px] bg-emerald-400 rounded-full" />
                  <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                    Female{" "}
                  </div>
                </div>
                <div className="justify-start items-center gap-[25px] flex">
                  <div className="w-[22px] h-[22px] bg-indigo-500 rounded-full" />
                  <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                    Male{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
