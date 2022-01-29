import userTypes from "./user.types";


// const INITIAL_STATE = {
//   currentUser: null,
//   userErr: [],
//   resetPasswordSuccess: false,
//   users: [],
//   user: [],
// };

const userReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case userTypes.AUTH:
      localStorage.setItem("userProfile", JSON.stringify({ ...action?.data }));
      localStorage.getItem("userProfile", JSON.stringify({ ...action?.data }));
      console.log(action?.data, "action data");
      return { ...state, authData: action?.data,  };
    case userTypes.SET_USER:
      // localStorage.setItem("userProfile",   ...action?.data  );
      // localStorage.getItem("userProfile", JSON.stringify({ ...action?.data }));
      console.log(action?.data, "this action reducers");
    return { ...state, authData: action?.data, };
    case userTypes.LOG_OUT_USER:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default userReducer;
