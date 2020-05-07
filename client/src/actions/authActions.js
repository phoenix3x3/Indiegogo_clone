import axios from "axios";
import { returnErrors } from "./errorActions";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/users/auth", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

export const registerUser = ({ name, lastName, email, password }) => (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, lastName, password });
  axios
    .post("/api/users/registration", body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          "REGISTRATION_FAIL"
        )
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

export const loginUser = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post("api/users/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });

  // axios
  //   .post("api/users", body, config)
  //   .then((res) => {
  //     dispatch({
  //       type: LOGIN_SUCCESS,
  //       payload: res.data,
  //     });
  //   })
  //   .catch((err) => {
  //     return returnErrors(err.response.data, err.response.status, "LOGIN_FAIL");
  //   })
  //   .dispatch({
  //     type: LOGIN_FAIL,
  //   });
};

export const logoutUser = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
