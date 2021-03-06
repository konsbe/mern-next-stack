import React, { useState } from "react";
import ButtonForm from "../Form/ButtonForm";
import InputForm from "../Form/InputForm";
import { Box } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { GoogleLogin } from "react-google-login";
import { Button } from "@mui/material";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Icon from "./icon";
import styles from "./../styles/Form.module.scss";

import { logInAction } from "./../../redux/User/user.actions";

const initialState = {
  email: "",

  password: "",
};

function LoginForm() {
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } }).then(
        router.push("/")
      );
    } catch (error) {
      console.log(error);
    }
    // console.log(res);
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google sign in unsuccessful");
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "login");
    dispatch(logInAction(formData, router));
  };
  return (
    <form onSubmit={handleSubmit} className={styles.signUpform}>
      <InputForm
        label="email"
        type="email"
        name="email"
        placeholder="example@email.com"
        variant="standard"
        autoFocus
        sx={{ width: 200, input: { color: "white" } }}
        onChange={handleChange}
      />
      <InputForm
        label="password"
        type="password"
        name="password"
        variant="standard"
        color="secondary"
        sx={{ width: 200, input: { color: "white" } }}
        onChange={handleChange}
      />
      <Box component="div">
        <ButtonForm
          className={styles.buttonBox}
          startIcon={<LockOpenIcon />}
          variant="outlined"
          color="success"
          type="submit"
          sx={{ width: 200 }}
        >
          Log in
        </ButtonForm>
      </Box>
      <GoogleLogin
        clientId="131233728657-0h9g8a4fo65r7l3ous5skvdtcth8ddv3.apps.googleusercontent.com"
        render={(renderProps) => (
          <Button
            className={classes.googleButton}
            color="primary"
            fullWidth
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            startIcon={<Icon />}
            vaiant="contained"
          >
            {" "}
            Google Log in
          </Button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      />
    </form>
  );
}

export default LoginForm;
