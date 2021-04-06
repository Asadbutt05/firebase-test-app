import axios from "axios";
import * as TASKS from "../ui/ui";
import * as util from "../../../utilities";

import * as TYPES from "../../types";

const logouter = () => {
  return {
    type: TYPES.LOGOUT,
    user: null,
  };
};
export const login = (params) => {
  return (dispatch) => {
    dispatch(TASKS.showLoader());
    axios
      .post(`auth/login/`, params)
      .then(function() {
        dispatch(TASKS.hideLoader());
      })
      .catch(function() {
        util.showToast("Please try again.");
        dispatch(TASKS.hideLoader());
      });
  };
};
export const signup = (params) => {
  return (dispatch) => {
    dispatch(TASKS.showLoader());
    axios
      .post(`auth/registration/`, params)
      .then(function() {
        dispatch(TASKS.hideLoader());
      })
      .catch(function() {
        util.showToast("Something went wrong. Please try again");
        dispatch(TASKS.hideLoader());
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(logouter());
    util.navigate("login");
  };
};
