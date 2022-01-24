import React from "react";
import Head from "next/head";
import SignUpForm from "../clientF/components/SignUpForm";

function signup() {
  return (
    <div>
      <Head>
        <title>Sign Up</title>
        {/* <meta name="keywords" content="web development, programming" /> */}
      </Head>
      <SignUpForm />
    </div>
  );
}

export default signup;
