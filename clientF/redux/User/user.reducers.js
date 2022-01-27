import userTypes from "./user.types";

const userReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case userTypes.AUTH:
      localStorage.setItem("userProfile", JSON.stringify({ ...action?.data }));
      console.log(action?.data);
      return { ...state, authData: action?.data };
    case userTypes.LOG_OUT_USER:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
      s;
  }
};

export default userReducer;
