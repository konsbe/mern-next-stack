import React, { useEffect, useState } from "react";
import { setUserAction } from "../clientF/redux/User/user.actions";
import { useDispatch } from "react-redux";

const User = ({ data }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("userProfile")), "user!!!2");
    // setUser(JSON.parse(localStorage.getItem("userProfile")));
    dispatch(setUserAction(JSON.parse(localStorage.getItem("userProfile"))));

    // console.log(user, "user/");
  }, [dispatch]);
  return (
    <>
      <p>{data}</p>
    </>
  );
};



export default User;
