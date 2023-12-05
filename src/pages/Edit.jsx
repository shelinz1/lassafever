import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Toast from "../components/Toast";
import validator from "validator";
import Sidebar from "../components/Sidebar";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 5000,
};

export default function EditProfile() {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const { lastname, firstname, phoneNumber } = formValues;

  //submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(formValues);

    // setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      try {
        const response = await axios.put(
          "https://lassa-alert-system-29e01ab50dd3.herokuapp.com/api/v1/users/update",
          {
            lastname: lastname,
            firstname: firstname,
            mobileNumber: phoneNumber,
          }
        );
        setLoading(false);

        console.log("Registration successful:", response.data);
        toast.success(`${response.data.message}`, ToastObjects);
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

    if (formValues.phoneNumber.length !== 13) {
      // errors.phoneNumber =
      //   "Invalid mobile number, mobile number must be 13 digits long";
      toast.error(
        "Invalid mobile number, mobile number must be 13 digits long"
      );
    }

    return errors;
  };

  return (
    <section className="w-screen h-screen flex gap-10 items-center">
      <div className="max-w-[320px] w-full h-full">
        <Sidebar />
      </div>

      <div className="left-[350px] top-[50px] absolute flex-col justify-start items-start gap-[20px] flex">
        <div className="bg-white justify-center items-center gap-2.5 inline-flex">
          <div className="w-[1044px] text-emerald-400 text-[30px] font-semibold font-['Inter'] leading-snug tracking-tight">
            Settings
          </div>
        </div>

        <div className="text-zinc-600 text-2xl font-medium font-['Inter'] leading-[13px] tracking-tight">
          Edit Profile
        </div>

        <div className="pl-[104px] pr-[109px] py-[84px] bg-white rounded-[7px] shadow justify-start items-center inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-5 inline-flex">
            <form onSubmit={handleSubmit}>
              <div className="flex-col justify-start items-start gap-6 flex mt-5">
                <label
                  className="text-zinc-600 text-base font-medium font-['Inter'] leading-[13px] tracking-tight"
                  htmlFor="lastname"
                >
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Input Last Name"
                  name="lastname"
                  value={formValues.lastname}
                  onChange={onChange}
                  id="lastname"
                  className="w-[836px] px-3 py-[20px] bg-neutral-50 rounded-[10px] justify-start items-center gap-[30px] inline-flex"
                />
              </div>

              <div className="flex-col justify-start items-start gap-6 flex mt-5">
                <label
                  className="text-zinc-600 text-base font-medium font-['Inter'] leading-[13px] tracking-tight"
                  htmlFor="firstname"
                >
                  firstname
                </label>
                <input
                  type="text"
                  placeholder="Input First Name"
                  name="firstname"
                  value={formValues.firstname}
                  onChange={onChange}
                  id="firstname"
                  className="w-[836px] px-3 py-[20px] bg-neutral-50 rounded-[10px] justify-start items-center gap-[30px] inline-flex"
                />
              </div>

              <div className="flex-col justify-start items-start gap-6 flex mt-5">
                <label
                  className="text-zinc-600 text-base font-medium font-['Inter'] leading-[13px] tracking-tight"
                  htmlFor="phoneNumber"
                >
                  Prefered Number
                </label>
                <input
                  type="number"
                  placeholder="Input phone number"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={onChange}
                  id="phoneNumber"
                  className="w-[836px] px-3 py-[20px] bg-neutral-50 rounded-[10px] justify-start items-center gap-[30px] inline-flex"
                />
              </div>

              {loading ? (
                <>
                  <button
                    disabled
                    className="w-[161px] h-16 px-2.5 py-5 bg-emerald-400 rounded-[10px] justify-center items-center gap-2.5 inline-flex mt-4"
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
                    className="w-[161px] h-16 px-2.5 py-5 bg-emerald-400 rounded-[10px] justify-center items-center gap-2.5 inline-flex mt-5"
                  >
                    <span className="text-white text-2xl font-medium font-['Inter']">
                      Save
                    </span>
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
