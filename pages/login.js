import React from "react";
import Link from "next/link";
import LoginForm from "../clientF/components/LogInForm";

function login() {
  return (
    <div>
      <p>
        not an acount <Link href="/signup">Sign Up</Link>
      </p>
      <p>login form</p>
      <LoginForm />
    </div>
  );
}

export default login;
