import React, { useState } from "react";
import ButtonForm from "../Form/ButtonForm";
import InputForm from "../Form/InputForm";
import { Box } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import styles from "./../styles/Form.module.scss";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="email"
        type="email"
        placeholder="example@email.com"
        variant="standard"
        sx={{ width: 200 }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputForm
        label="password"
        type="password"
        variant="standard"
        sx={{ width: 200 }}
        onChange={(e) => setPassword(e.target.value)}
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
    </form>
  );
}

export default LoginForm;
