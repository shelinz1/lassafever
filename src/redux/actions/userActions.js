import axios from "axios";
import { toast } from "react-toastify";
import {
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userTypes";

//REGISTER A USER
export const userReg =
  (firstname, lastname, email, phoneNumber, password) => async (dispatch) => {
    const ToastObjects = {
      pauseOnFocusLoss: false,
      draggable: false,
      pauseOnHover: false,
      autoClose: 3000,
    };
    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: { firstname, lastname, email, phoneNumber, password },
    });
    try {
      const { data } = await axios.post(
        "https://lassa-alert-system-29e01ab50dd3.herokuapp.com/api/v1/users",
        {
          firstname,
          lastname,
          email,
          phoneNumber,
          password,
        }
      );

      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      toast.success(data.message, ToastObjects);
      //   dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
