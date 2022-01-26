import userTypes from "./user.types";

const userReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case userTypes.AUTH:
       localStorage.setItem("userProfile", JSON.stringify({ ...action?.data }));
      console.log(action?.data);
      return { ...state, authData: action?.data };
    default:
      return state;s
  }
};

export default userReducer;
