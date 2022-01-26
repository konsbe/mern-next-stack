import userTypes from "./user.types";

const userReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case userTypes.AUTH:
      console.log(action?.data);

    default:
      return state;
  }
};

export default userReducer;
