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

function SignUpForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log(
        username,
        lastname,
        email,
        birthday,
        password,
        confirmPassword
      );
    } else {
      alert("password is not the same");
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
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
          color="success"
          placeholder="FirsName"
          variant="standard"
          autoFocus
          sx={{ width: 200, input: { color: "white" } }}
          onChange={(e) => setUsername(e.target.value)}
          // className={styles.inputControl}
          // sx={{  }}
        />
      </FormControl>
      <InputForm
        label="Last Name"
        placeholder="LastName"
        variant="standard"
        sx={{ width: 200, input: { color: "white" } }}
        onChange={(e) => setLastname(e.target.value)}
      />
      <InputForm
        label="email"
        type="email"
        placeholder="example@email.com"
        variant="standard"
        sx={{ width: 200, input: { color: "white" } }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputForm
        type="date"
        label="BirthDay"
        variant="standard"
        sx={{ width: 200, input: { color: "white" } }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setBirthday(e.target.value)}
      />
      <InputForm
        label="password"
        type="password"
        variant="standard"
        placeholder="password"
        sx={{ width: 200, input: { color: "white" } }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputForm
        type="password"
        label="confirm password"
        variant="standard"
        sx={{ width: 200, input: { color: "white" } }}
        placeholder="confirm password"
        onChange={(e) => setConfirmPassword(e.target.value)}
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
