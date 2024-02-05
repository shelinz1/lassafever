// import { useState } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import Toast from "../components/Toast";
// import Footer from "../components/footer/Footer";

// const ToastObjects = {
//   pauseOnFocusLoss: false,
//   draggable: false,
//   pauseOnHover: false,
//   autoClose: 5000,
// };

// export default function EditProfile() {
//   const [formValues, setFormValues] = useState({
//     lastname: "",
//     firstname: "",
//     phoneNumber: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const onChange = (e) => {
//     setFormValues({ ...formValues, [e.target.name]: e.target.value });
//   };

//   const { lastname, firstname, phoneNumber } = formValues;

//   // const { user } = JSON.parse(localStorage.getItem("userDetails"));

//   //submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const errors = validate(formValues);

//     // setErrors(errors);
//     if (Object.keys(errors).length === 0) {
//       setLoading(true);
//       try {
//         const { data } = await axios.put(
//           "https://lassa-alert-system-1d7a7ac7a794.herokuapp.com/api/v1/users/update",
//           {
//             lastName: lastname,
//             firstname: firstname,
//             mobileNumber: phoneNumber,
//           },
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${data.access_token}`,
//             },
//           }
//         );
//         setLoading(false);

//         console.log("Registration successful:", data.data);
//         toast.success(`${data.data.message}`, ToastObjects);
//       } catch (error) {
//         setLoading(false);
//         console.log(error);
//         toast.error(`${error.data.data.message}`, ToastObjects);
//       }
//     }
//   };

//   //frontend form validation using validator
//   const validate = (formValues) => {
//     const errors = {};

//     if (formValues.phoneNumber.length !== 13) {
//       // errors.phoneNumber =
//       //   "Invalid mobile number, mobile number must be 13 digits long";
//       toast.error(
//         "Invalid mobile number, mobile number must be 13 digits long"
//       );
//     }

//     return errors;
//   };

//   return (
//     <>
//       <section className="mx-auto min-h-screen my-4 p-4 sm:px-6 md:px-8 lg:px-10">
//         <Toast />

//         <div className="text-emerald-400 text-3xl font-semibold font-inter">
//           Settings
//         </div>

//         <div className="text-zinc-600 text-2xl font-medium font-inter">
//           Edit Profile
//         </div>

//         <div className="bg-gray-200 p-4 rounded-lg my-4 sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
//           <form onSubmit={handleSubmit}>
//             <div className="flex flex-col mt-5">
//               <label
//                 className="text-zinc-600 text-base font-medium font-inter"
//                 htmlFor="lastname"
//               >
//                 Last name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Input Last Name"
//                 name="lastname"
//                 value={formValues.lastname}
//                 onChange={onChange}
//                 id="lastname"
//                 className="w-full h-12 px-4 bg-neutral-50 rounded-md mt-2"
//                 required
//               />
//             </div>

//             <div className="flex flex-col mt-5">
//               <label
//                 className="text-zinc-600 text-base font-medium font-inter"
//                 htmlFor="firstname"
//               >
//                 First name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Input First Name"
//                 name="firstname"
//                 value={formValues.firstname}
//                 onChange={onChange}
//                 id="firstname"
//                 className="w-full h-12 px-4 bg-neutral-50 rounded-md mt-2"
//               />
//             </div>

//             <div className="flex flex-col mt-5">
//               <label
//                 className="text-zinc-600 text-base font-medium font-inter"
//                 htmlFor="phoneNumber"
//               >
//                 Preferred Number
//               </label>
//               <input
//                 type="number"
//                 placeholder="Input phone number"
//                 name="phoneNumber"
//                 value={formValues.phoneNumber}
//                 onChange={onChange}
//                 id="phoneNumber"
//                 className="w-full h-12 px-4 bg-neutral-50 rounded-md mt-2"
//               />
//             </div>

//             {loading ? (
//               <button
//                 disabled
//                 className="w-full h-12 px-4 mt-4 bg-emerald-400 rounded-md text-white opacity-50 cursor-not-allowed"
//               >
//                 Loading...
//               </button>
//             ) : (
//               <button
//                 type="submit"
//                 className="w-full h-12 px-4 mt-5 bg-emerald-400 rounded-md text-white"
//               >
//                 Save
//               </button>
//             )}
//           </form>
//         </div>
//         <Footer />
//       </section>
//     </>
//   );
// }
