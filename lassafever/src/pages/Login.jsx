import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import Toast from "../components/Toast";
import axios from "axios";
import validator from "validator";
import { Input, initTE } from "tw-elements";
import Footer from "../components/footer/Footer";
import "./login.css";

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

  const { password, email } = formValues;

  useEffect(() => {
    initTE({ Input });
  }, []);

  //submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(formValues);

    // setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      try {
        // THIS IS THE OLD URL - https://lassa-alert-system-29e01ab50dd3.herokuapp.com/api/v1/users
        const { data } = await axios.post(
          "https://lassa-alert-system-1d7a7ac7a794.herokuapp.com/api/v1/auth/login",
          {
            email: email,
            password: password,
          }
        );
        setLoading(false);

        // Save user details to local storage after successful registration
        localStorage.setItem("userInfo", JSON.stringify(data));
        console.log(data);
        toast.success(`${data?.message}`, ToastObjects);

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } catch (error) {
        setLoading(false);
        toast.error(`${error.response.data.message}`, ToastObjects);
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
    <section className="login ">
      <Toast />
      <div className="relative py-30 mx-auto mt-10 mb-5 flex flex-col items-center justify-center lg:w-[80%] md:w-[90%] sm:w-full">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex items-center justify-center mt-3 text-emerald-400 text-4xl font-bold font-['Inter']">
            Login
          </div>
          <div className="mb-6">
            <label
              className="block text-zinc-600 text-xl font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full h-12 px-4 mt-2 bg-zinc-300 rounded-md"
              type="email"
              placeholder="Enter email"
              name="email"
              value={formValues.email}
              onChange={onChange}
              id="email"
              required
            />
          </div>

          <div className="mb-6 relative">
            <label
              className="block text-zinc-600 text-xl font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full h-12 px-4 mt-2 bg-zinc-300 rounded-md"
                type={toggle ? "text" : "password"}
                placeholder="Input Password"
                name="password"
                value={formValues.password}
                onChange={onChange}
                id="password"
              />
              <span className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                <FaEye size={25} onClick={() => setToggle(!toggle)} />
              </span>
            </div>
          </div>

          {loading ? (
            <button
              disabled
              className="w-full h-12 px-4 bg-emerald-400 rounded-md text-white disabled:opacity-50"
            >
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full h-12 px-4 bg-emerald-400 rounded-md text-white"
            >
              Login
            </button>
          )}

          <div className="text-zinc-600 text-base font-medium font-inter mt-3 text-center">
            Don't have an account?{" "}
            <Link to={`/register`} className="text-emerald-400 font-bold ml-1">
              Register
            </Link>
          </div>
        </form>
      </div>

      <Footer />
    </section>
  );
};

export default Login;
