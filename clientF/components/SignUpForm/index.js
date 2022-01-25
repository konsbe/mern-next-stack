import React, { useState } from "react";
import ButtonForm from "../Form/ButtonForm";
import InputForm from "../Form/InputForm";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import FormControl from "@mui/material/FormControl";
import { ThemeProvider } from "@emotion/react";

import styles from "./../styles/Form.module.scss";

function SignUpForm() {
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
  return (
    <form onSubmit={handleSubmit} className={styles.signUpform}>
      <FormControl variant="standard">
        <InputForm
          label="Username"
          color="success"
          placeholder="FirsName"
          variant="standard"
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
