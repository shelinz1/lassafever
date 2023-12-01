import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [toggle, setToggle] = useState(false);

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const { email, password } = formValues;
  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div className="w-[1000px] h-[1117px] justify-start items-center gap-[133px] inline-flex">
      <div className="w-[609px] h-[1117px] flex-col justify-center items-center inline-flex">
        <div className="w-[609px] h-[1117px] bg-emerald-400" />
      </div>
      <div className="w-[783px] h-[873px] relative">
        <div className="left-0 top-0 absolute text-emerald-400 text-4xl font-bold font-['Inter'] leading-snug tracking-tight">
          Log In
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-[779px] h-[109px] left-[4px] top-[150px] absolute flex-col justify-start items-start gap-8 inline-flex">
            <label
              className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-[779px] h-16 px-5 py-2.5 bg-zinc-300 rounded-[7px] shadow justify-start items-center gap-2.5 inline-flex"
              type="email"
              placeholder="Enter email"
              name="email"
              value={formValues.email}
              onChange={onChange}
              id="email"
            />
          </div>
          <div className="w-[773px] h-[13px] left-[7px] top-[432px] absolute justify-start items-start gap-[324px] inline-flex">
            <div>
              <span className="text-zinc-600 text-base font-medium font-['Inter'] leading-[13px] tracking-tight">
                Not Yet Registered?{" "}
              </span>
              <Link
                to={`/register`}
                className="text-emerald-400 text-base font-bold font-['Inter'] leading-[13px] tracking-tight cursor-pointer"
              >
                Sign Up
              </Link>
            </div>
            <div>
              <span className="text-zinc-600 text-base font-medium font-['Inter'] leading-[13px] tracking-tight">
                Forgot Password?{" "}
              </span>
              <span className="text-emerald-400 text-base font-bold font-['Inter'] leading-[13px] tracking-tight cursor-pointer">
                Click Here
              </span>
            </div>
          </div>

          <button className="w-[779px] h-16 px-2.5 py-5 left-[4px] top-[509px] absolute bg-emerald-400 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
            <span className="text-white text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
              Log In
            </span>
          </button>

          <div className="w-[779px] h-[109px] left-[1px] top-[291px] relative flex-col justify-start items-start gap-8 inline-flex">
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
                  placeholder="Enter password"
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
        </form>
      </div>
    </div>
  );
};

export default Login;
