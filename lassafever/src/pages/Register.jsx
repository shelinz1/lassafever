import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import Toast from "../components/Toast";
import validator from "validator";
import Footer from "../components/footer/Footer";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 5000,
};

const Register = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    password2: "",
  });

  // const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const { firstName, lastName, email, phoneNumber, password, password2 } =
    formValues;

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
          "https://lassa-alert-system-1d7a7ac7a794.herokuapp.com/api/v1/users",
          {
            firstname: firstName,
            lastname: lastName,
            email: email,
            mobileNumber: phoneNumber,
            password: password,
            confirmPassword: password2,
          }
        );
        console.log(data);
        setLoading(false);

        // Save user details to local storage after successful registration
        localStorage.setItem("userInfo", JSON.stringify(data));

        toast.success(`${data.data.message}`, ToastObjects);
        navigate("/userauth");
      } catch (error) {
        setLoading(false);
        toast.error(`${error.message}`, ToastObjects);
      }
    }
  };

  //frontend form validation using validator
  const validate = (formValues) => {
    const errors = {};

    if (!email) {
      errors.email = "Email can't be empty.";
    } else if (!validator.isEmail(email)) {
      toast.error("Invalid email");
    }

    if (formValues.phoneNumber.length !== 13) {
      toast.error(
        "Invalid mobile number, mobile number must be 13 digits long"
      );
    }

    if (!formValues.password) {
      // errors.password = "password can't be blank";
      toast.error("passwords cannot be blank");
    }

    if (formValues.password !== formValues.password2) {
      toast.error("passwords do not match");
    }

    if (formValues.password.length < 8) {
      toast.error(
        "Password must have at least one uppercase letter, one lowercase letter, one special character and one number. It must also be a minimum of 8 and maximum of 20 characters"
      );
    }

    return errors;
  };

  return (
    <section>
      <Toast />
      <div className="relative mx-auto mt-10 mb-5 flex flex-col items-center justify-center lg:w-[80%] md:w-[90%] sm:w-full">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="text-emerald-400 text-4xl font-bold font-inter text-center my-3">
            Register
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="text-zinc-600 text-xl font-medium font-inter"
              >
                First name
              </label>
              <input
                type="text"
                placeholder="Input First Name"
                name="firstName"
                value={formValues.firstName}
                onChange={onChange}
                id="firstName"
                className="w-full h-12 px-4 bg-zinc-300 rounded-md mt-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="text-zinc-600 text-xl font-medium font-inter"
              >
                Last name
              </label>
              <input
                type="text"
                placeholder="Input Last Name"
                name="lastName"
                value={formValues.lastName}
                onChange={onChange}
                id="lastName"
                className="w-full h-12 px-4 bg-zinc-300 rounded-md mt-2"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="email"
              className="text-zinc-600 text-xl font-medium font-inter"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Input Email"
              name="email"
              value={formValues.email}
              onChange={onChange}
              id="email"
              className="w-full h-12 px-4 bg-zinc-300 rounded-md mt-2"
              required
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="phoneNumber"
              className="text-zinc-600 text-xl font-medium font-inter"
            >
              Phone number
            </label>
            <input
              type="number"
              placeholder="Input phone number"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={onChange}
              id="phoneNumber"
              className="w-full h-12 px-4 bg-zinc-300 rounded-md mt-2"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="password"
              className="text-zinc-600 text-xl font-medium font-inter"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={toggle ? "text" : "password"}
                placeholder="Input Password"
                name="password"
                value={formValues.password}
                onChange={onChange}
                id="password"
                className="w-full h-12 px-4 bg-zinc-300 rounded-md mt-2"
                required
              />
              <span className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                <FaEye size={25} onClick={() => setToggle(!toggle)} />
              </span>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="password2"
              className="text-zinc-600 text-xl font-medium font-inter"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={toggle ? "text" : "password"}
                placeholder="Confirm Password"
                name="password2"
                value={formValues.password2}
                onChange={onChange}
                id="password2"
                className="w-full h-12 px-4 bg-zinc-300 rounded-md mt-2"
                required
              />
              <span className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                <FaEye size={25} onClick={() => setToggle(!toggle)} />
              </span>
            </div>
          </div>

          {loading ? (
            <button
              disabled
              className="w-full h-12 px-4 mt-4 bg-emerald-400 rounded-md text-white opacity-50 cursor-not-allowed"
            >
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full h-12 px-4 mt-5 bg-emerald-400 rounded-md text-white"
            >
              Send Authentication
            </button>
          )}

          <div className="text-zinc-600 text-base font-medium font-inter mt-3 text-center">
            Already Registered?{" "}
            <Link to={`/`} className="text-emerald-400 font-bold ml-1">
              Login
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Register;
