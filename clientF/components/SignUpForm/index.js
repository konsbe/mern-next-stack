import React, { useState } from "react";
import ButtonForm from "../Form/ButtonForm";
import InputForm from "../Form/InputForm";
import { GoogleLogin } from "react-google-login";
import Icon from "./icon";
import { Button } from "@mui/material";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import FormControl from "@mui/material/FormControl";
import { ThemeProvider } from "@emotion/react";
import useStyles from "./styles";
import styles from "./../styles/Form.module.scss";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { signUpAction } from "../../redux/User/user.actions";

const initialState = {
  userName: "",
  lastName: "",
  email: "",
  birthDay: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  // const [username, setUsername] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  // const [birthday, setBirthday] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      console.log(formData);
      dispatch(signUpAction(formData, router));
      // console.log(
      //   username,
      //   lastname,
      //   email,
      //   birthday,
      //   password,
      //   confirmPassword
      // );
    } else {
      alert("password is not the same");
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  return (
    <form onSubmit={handleSubmit} className={styles.signUpform}>
      <FormControl variant="standard">
        <InputForm
          label="Username"
          name="userName"
          color="success"
          placeholder="First Name"
          variant="standard"
          autoFocus
          sx={{ width: 200, input: { color: "white" } }}
          onChange={handleChange}
          // className={styles.inputControl}
          // sx={{  }}
        />
      </FormControl>
      <InputForm
        label="Last Name"
        name="lastName"
        placeholder="Last Name"
        color="success"
        variant="standard"
        sx={{ width: 200, input: { color: "white" } }}
        onChange={handleChange}
      />
      <InputForm
        label="email"
        type="email"
        name="email"
        placeholder="example@email.com"
        variant="standard"
        sx={{ width: 200, input: { color: "white" } }}
        onChange={handleChange}
      />
      <InputForm
        type="date"
        label="BirthDay"
        variant="standard"
        name="birthDay"
        sx={{ width: 200, input: { color: "white" } }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
      />
      <InputForm
        label="password"
        type="password"
        variant="standard"
        placeholder="password"
        name="password"
        color="secondary"
        sx={{ width: 200, input: { color: "white" } }}
        onChange={handleChange}
      />
      <InputForm
        type="password"
        label="confirm password"
        variant="standard"
        sx={{ width: 200, input: { color: "white" } }}
        placeholder="confirm password"
        name="confirmPassword"
        color="secondary"
        onChange={handleChange}
      />
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
            Google Sign in
          </Button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      />
      <ButtonForm
        className={styles.buttonBox}
        startIcon={<LockOpenIcon />}
        variant="outlined"
        color="success"
        type="submit"
        sx={{ width: 200, input: { color: "white" } }}
      >
        Sign Up
      </ButtonForm>
    </form>
  );
}

export default SignUpForm;
