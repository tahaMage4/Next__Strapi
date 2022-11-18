import React from "react";
import styles from "./Login.module.scss";
const Login = () => {
  return (
    <>
      <div className={styles.center}>
        <div className={styles.container}>
          <form>
            <div className={styles.form_icon}>
              <i className="fa fa-user"></i>
            </div>
            <h3 className={styles.title}>Login</h3>
            <input
              className={styles.form_control}
              type="email"
              placeholder="Email Address"
            />
            <input
              className={styles.form_control}
              type="password"
              placeholder="Password"
            />
            <button
              onClick={() => {
                alert("Login");
              }}
              type="button"
              className={styles.btn}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
