import userTypes from "./user.types";
import * as api from "./api/index.js";

export const signUpAction = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: userTypes.AUTH, data });
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const logInAction = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.logIn(formData);
    dispatch({ type: userTypes.AUTH, data });
    console.log(localStorage.getItem("userProfile"));
    console.log(JSON.parse(localStorage.getItem("userProfile")).token);
    router.push("/");
  } catch (error) {
    console.log("error");
  }
};
