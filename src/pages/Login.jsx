import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import AuthLayout from "../layouts/AuthLayout";
import { toast } from "react-toastify";
import Toast from "../components/Toast";
import axios from "axios";
import validator from "validator";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 5000,
};

const Login = () => {
  const [formValues, setFormValues] = useState({ password: "", email: "" });

  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const { email, password } = formValues;

  //submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(formValues);

    // setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      try {
        const { data } = await axios.post(
          "https://lassa-alert-system-29e01ab50dd3.herokuapp.com/api/v1/auth/login",
          { password: password, email: email }
        );
        setLoading(false);

        // Save user details to local storage after successful registration
        localStorage.setItem("userDetails", JSON.stringify(data.data));
        localStorage.setItem("accessToken", JSON.stringify(data.access_token));

        console.log("Login successful:", data);
        console.log(data);
        toast.success(`${data.message}`, ToastObjects);

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error(`${error.response.data.message}`, ToastObjects);
        // console.error("Registration error:", error.message);
      }
    }
  };

  //frontend form validation using validator
  const validate = (formValues) => {
    const errors = {};

    if (!email) {
      errors.email = "Email can't be empty.";
    } else if (!validator.isEmail(email)) {
      // errors.email = "Invalid email.";
      toast.error("Invalid email");
    }

    if (!formValues.password) {
      // errors.password = "password can't be blank";
      toast.error("passwords cannot be blank");
    }

    if (formValues.password.length < 8) {
      // errors.password =
      //   "Password must have at least one uppercase letter, one lowercase letter, one special character and one number. It must also be a minimum of 8 and maximum of 20 characters";
      toast.error(
        "Password must have at least one uppercase letter, one lowercase letter, one special character and one number. It must also be a minimum of 8 and maximum of 20 characters"
      );
    }

    return errors;
  };

  return (
    <AuthLayout>
      <>
        <Toast />

        <div className="top-[-400px] relative">
          <div className=" absolute text-emerald-400 text-4xl font-bold font-['Inter'] leading-snug tracking-tight">
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
                required
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

            {loading ? (
              <>
                <button className="w-[779px] h-16 px-2.5 py-5 left-[4px] top-[509px] absolute bg-emerald-400 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                  <span className="text-white text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                    Loading...
                  </span>
                </button>
              </>
            ) : (
              <>
                <button
                  type="submit"
                  className="w-[779px] h-16 px-2.5 py-5 left-[4px] top-[509px] absolute bg-emerald-400 rounded-[10px] justify-center items-center gap-2.5 inline-flex"
                >
                  <span className="text-white text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                    Log In
                  </span>
                </button>
              </>
            )}

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
      </>
    </AuthLayout>
  );
};

export default Login;
