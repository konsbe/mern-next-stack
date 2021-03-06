import React from "react";
import Link from "next/link";
import LoginForm from "../clientF/components/LogInForm";
import styles from "./styles/Form.module.scss";

function login() {
  return (
    <div>
      <p className={styles.formtext}>
        not an acount{" "}
        <span>
          <Link href="/signup">
            <a className={styles.linkText}>Sign Up</a>
          </Link>
        </span>
      </p>

      <LoginForm />
    </div>
  );
}

export default login;
