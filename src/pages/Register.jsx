import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import Toast from "../components/Toast";
import AuthLayout from "../layouts/AuthLayout";
import validator from "validator";

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
        const { data } = await axios.post(
          "https://lassa-alert-system-29e01ab50dd3.herokuapp.com/api/v1/users",
          {
            firstname: firstName,
            lastname: lastName,
            email: email,
            mobileNumber: phoneNumber,
            password: password,
            confirmPassword: password2,
          }
        );
        setLoading(false);

        // Save user details to local storage after successful registration
        // localStorage.setItem("userDetails", JSON.stringify(data.data));

        console.log("Registration successful:", data);
        toast.success(`${data.message}`, ToastObjects);

        setTimeout(() => {
          navigate("/userauth");
        }, 2000);
      } catch (error) {
        setLoading(false);
        // console.log(error);
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

    if (formValues.phoneNumber.length !== 13) {
      // errors.phoneNumber =
      //   "Invalid mobile number, mobile number must be 13 digits long";
      toast.error(
        "Invalid mobile number, mobile number must be 13 digits long"
      );
    }

    if (!formValues.password) {
      // errors.password = "password can't be blank";
      toast.error("passwords cannot be blank");
    }

    if (formValues.password !== formValues.password2) {
      // errors.password = "passwords do not match";
      // errors.password2 = "passwords do not match";
      toast.error("passwords do not match");
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
        <div className="">
          <div className=" relative">
            <div className="flex-col justify-start items-start gap-8 inline-flex">
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
                      required
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
                      required
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
                      required
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

                <div className="w-[779px] h-[109px]  relative flex-col justify-start items-start gap-8 mt-5 inline-flex">
                  <label
                    className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight"
                    htmlFor="password"
                  >
                    confirmPassword
                  </label>
                  <div className="flex-col justify-start items-start gap-2.5 flex">
                    <div className="flex-col justify-start items-start gap-2.5 flex">
                      <input
                        className="w-[779px] h-16 px-5 py-2.5 bg-zinc-300 rounded-[7px] shadow justify-start items-center gap-2.5 inline-flex"
                        type={toggle ? "text" : "password"}
                        placeholder="Confirm password"
                        name="password2"
                        value={formValues.password2}
                        onChange={onChange}
                        id="password2"
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

                {loading ? (
                  <>
                    <button
                      disabled
                      className="w-[779px] h-16 px-2.5 py-5 bg-emerald-400 rounded-[10px] justify-center items-center gap-2.5 inline-flex mt-4"
                    >
                      <span className="text-white text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                        Loading...
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="w-[779px] h-16 px-2.5 py-5 bg-emerald-400 rounded-[10px] justify-center items-center gap-2.5 inline-flex mt-4"
                    >
                      <span className="text-white text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
                        Send Authentication
                      </span>
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </>
    </AuthLayout>
  );
};

export default Register;
