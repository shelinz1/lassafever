import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Toast from "../components/Toast";
import moment from "moment";
import "./notification.css";
import Footer from "../components/footer/Footer";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 5000,
};

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(selectedNotification);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading to true while the data is being fetched
        setLoading(true);

        // Make the API request using Axios
        const { data } = await axios.get(
          "https://lassa-alert-system-1d7a7ac7a794.herokuapp.com/api/v1/notifications/outbreak-predictions"
        );

        // Set the data in the state
        setNotifications(data.data);
        console.log(data.data);

        // Set loading to false once data is fetched
        setLoading(false);
      } catch (error) {
        // Handle errors by setting the error state
        setLoading(false);
        toast.error(
          `${error.response?.data?.message || "An error occurred"}`,
          ToastObjects
        );
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  const openModal = (notification) => {
    setSelectedNotification(notification);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNotification(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="mb-5">
        <Toast />
        <div className="w-full max-w-[1071px] mx-auto mb-4 p-2.5 flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
          <div className="text-emerald-400 text-2xl sm:text-3xl md:text-4xl font-semibold font-inter leading-snug tracking-tight">
            Notification
          </div>
        </div>

        {loading && (
          <div className="flex items-center justify-center">
            <i
              className="fas fa-spinner fa-spin text-4xl text-emerald-400"
              aria-hidden="true"
            ></i>
          </div>
        )}

        {notifications.length === 0 && !loading && (
          <p>No notifications available.</p>
        )}

        {notifications.map((notification) => (
          <div
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mx-auto p-2 bg-gray-200"
            key={notification.id}
          >
            <div className="h-[73px] bg-white rounded-[7px] flex items-center justify-between gap-4 p-2">
              <div className="text-zinc-600 text-lg sm:text-sm md:text-2xl lg:text-3xl xl:text-2xl font-medium font-inter leading-[13px] tracking-tight">
                {notification.title}
              </div>

              {/* If you intended to have two different titles, you can replace the content here */}
              <div className="text-zinc-600 text-lg sm:text-sm md:text-2xl lg:text-3xl xl:text-2xl font-medium font-inter leading-[13px] tracking-tight">
                {moment(notification.createdAt).format("llll")}
              </div>

              {/* <button className="" onClick={() => openModal(notification)}>
              details
            </button> */}
              <button
                type="button"
                className="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                onClick={() => openModal(notification)}
              >
                Details
              </button>
            </div>

            {isModalOpen && (
              <div className="modal">
                <div className="modal-content">
                  {/* Render details of the selected notification */}
                  <p>Title: {selectedNotification.title}</p>
                  <p>
                    Time:{" "}
                    {moment(selectedNotification.createdAt).format("llll")}
                  </p>

                  <p>
                    Location:{" "}
                    {selectedNotification.outbreakPrediction.location.state}{" "}
                    {selectedNotification.outbreakPrediction.location.alias}
                  </p>

                  <p>
                    Likelihood:{" "}
                    {selectedNotification.outbreakPrediction.likelihood}
                  </p>

                  <p>
                    Severity: {selectedNotification.outbreakPrediction.severity}
                  </p>

                  <p>
                    Year:{" "}
                    {selectedNotification.outbreakPrediction.occurrenceYear}
                  </p>

                  <p>
                    Month:{" "}
                    {selectedNotification.outbreakPrediction.occurrenceMonth}
                  </p>

                  {/* <button onClick={closeModal}>Close</button> */}
                  <button
                    onClick={closeModal}
                    className="bg-rose-500 text-white  rounded-md flex items-center justify-center close"
                  >
                    <span className="mr-2">Close</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}

export default Notification;
