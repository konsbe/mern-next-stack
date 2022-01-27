import userTypes from "./user.types";
import * as api from "./api/index.js";

export const signUpAction = (formData, router) => async (dispatch) => {
  try {
    router.push("/");
    const { data } = await api.signUp(formData);
    dispatch({ type: userTypes.AUTH, data });
  } catch (error) {
    console.log(error);
  }
};

export const logInAction = (formData, router) => async (dispatch) => {
  try {
    router.push("/");
    const { data } = await api.logIn(formData);
    dispatch({ type: userTypes.AUTH, data });
  } catch (error) {
    console.log("error");
  }
};
