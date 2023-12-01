import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

const Register = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [toggle, setToggle] = useState(false);

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const { firstName, lastName, email, phoneNumber, password } = formValues;
  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(firstName, lastName, email, phoneNumber, password);
  };

  return (
    <div className="w-[1000px] h-[1117px] justify-center items-center gap-[134px] flex">
      <div className="w-[609px] h-[1117px] flex-col justify-center items-center inline-flex">
        <div className="w-[609px] h-[1117px] bg-emerald-400" />
      </div>

      <div className="w-[783px] h-[873px] relative">
        <div className="w-[779px] h-[682px] flex-col justify-start items-start gap-32 inline-flex">
          <div className="text-emerald-400 text-4xl font-bold font-['Inter'] leading-snug tracking-tight">
            Register
          </div>

          <form onSubmit={handleSubmit}>
            <div className="w-[779px] h-[32px] flex flex-row gap-8">
              <div className="w-[373px] h-[109px] flex-col justify-start items-start gap-8 inline-flex">
                <label
                  className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight"
                  htmlFor="firstName"
                >
                  First name
                </label>
                <input
                  className="w-[373px] h-16 px-5 py-2.5 bg-zinc-300 rounded-[7px] shadow justify-start items-center gap-2.5 inline-flex"
                  type="text"
                  placeholder="Input First Name"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={onChange}
                  id="firstName"
                />
              </div>

              <div className="w-[373px] h-[109px] flex-col justify-start items-start gap-8 inline-flex">
                <label
                  className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight"
                  htmlFor="lastName"
                >
                  Last name
                </label>
                <input
                  className="w-[373px] h-16 px-5 py-2.5 bg-zinc-300 rounded-[7px] shadow justify-start items-center gap-2.5 inline-flex"
                  type="text"
                  placeholder="Input Last Name"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={onChange}
                  id="lastName"
                />
              </div>
            </div>

            <div className="w-[779px] h-[32px]  flex flex-row gap-8 my-24">
              <div className="w-[373px] h-[109px] flex-col justify-start items-start gap-8 inline-flex">
                <label
                  className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-[373px] h-16 px-5 py-2.5 bg-zinc-300 rounded-[7px] shadow justify-start items-center gap-2.5 inline-flex"
                  type="email"
                  placeholder="Input Email"
                  name="email"
                  value={formValues.email}
                  onChange={onChange}
                  id="email"
                  // autoComplete="true"
                />
              </div>

              <div className="w-[373px] h-[109px] flex-col justify-start items-start gap-8 inline-flex">
                <label
                  className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight"
                  htmlFor="phoneNumber"
                >
                  Phone number
                </label>
                <input
                  className="w-[373px] h-16 px-5 py-2.5 bg-zinc-300 rounded-[7px] shadow justify-start items-center gap-2.5 inline-flex"
                  type="number"
                  placeholder="Input phone number"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={onChange}
                  id="phoneNumber"
                />
              </div>
            </div>

            <div className="w-[779px] h-[109px]  relative flex-col justify-start items-start gap-8 inline-flex">
              <label
                className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="flex-col justify-start items-start gap-2.5 flex">
                  <input
                    className="w-[779px] h-16 px-5 py-2.5 bg-zinc-300 rounded-[7px] shadow justify-start items-center gap-2.5 inline-flex"
                    type={toggle ? "text" : "password"}
                    placeholder="Input Password"
                    name="password"
                    value={formValues.password}
                    onChange={onChange}
                    id="password"
                  />

                  <span className="w-[30px] h-[30px] absolute right-5 py-7 flex justify-center cursor-pointer items-center">
                    <FaEye size={25} onClick={() => setToggle(!toggle)} />
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[778px] h-[13px] justify-between items-start gap-[348px] inline-flex mt-4">
              <div>
                <span className="text-zinc-600 text-base font-medium font-['Inter'] leading-[13px] tracking-tight">
                  Already Registered?,
                </span>
                <span className="text-zinc-600 text-base font-bold font-['Inter'] leading-[13px] tracking-tight">
                  {" "}
                </span>
                <Link
                  to={`/login`}
                  className="text-emerald-400 text-base font-bold font-['Inter'] leading-[13px] tracking-tight"
                >
                  Login
                </Link>
              </div>
              <div>
                <span className="text-zinc-600 text-base font-medium font-['Inter'] leading-[13px] tracking-tight">
                  Agree to{" "}
                </span>
                <span className="text-emerald-400 text-base font-bold font-['Inter'] leading-[13px] tracking-tight">
                  Terms
                </span>
                <span className="text-zinc-600 text-base font-medium font-['Inter'] leading-[13px] tracking-tight">
                  {" "}
                  &{" "}
                </span>
                <span className="text-emerald-400 text-base font-bold font-['Inter'] leading-[13px] tracking-tight">
                  Conditions
                </span>
              </div>
            </div>

            {/* <div className="flex flex-row justify-between items-center mt-4">
              <div>
                Already have an account? <Link to={`/login`}>Login</Link>
              </div>
              <span>skdfhaydi</span>
            </div> */}

            <button
              type="submit"
              className="w-[779px] h-16 px-2.5 py-5 bg-emerald-400 rounded-[10px] justify-center items-center gap-2.5 inline-flex mt-4"
            >
              <span className="text-white text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                Send Authentication
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
