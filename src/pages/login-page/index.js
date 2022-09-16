import { useState } from "react";
import { Validation } from "../../compound/validation";
import { VALIDATION_TYPE } from "../../utils/validate";
import { validate } from "../../utils/validate";
import { useNavigate, Link } from "react-router-dom";
import styles from "./index.module.css";

const { ONLY_NUMBERS, NO_SPACES, ONE_UPPERCASE, ONE_SPEC_SYMBOL } =
  VALIDATION_TYPE;

const loginConfig = [ONLY_NUMBERS, NO_SPACES];
const passwordConfig = [ONE_UPPERCASE, ONE_SPEC_SYMBOL, NO_SPACES];

export const LoginPage = () => {
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginText, setLoginText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const navigate = useNavigate();

  const clickHandler = () => {
    const loginError = validate(loginText, loginConfig);
    const passwordError = validate(passwordText, passwordConfig);

    setLoginError(loginError);
    setPasswordError(passwordError);

    if (!loginError && !passwordError) {
      navigate("/todos");
    }
  };

  const loginChangeHandler = ({ target: { value } }) => {
    setLoginText(value);
  };

  const passwordChangeHandler = ({ target: { value } }) => {
    setPasswordText(value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>Please log in</h1>
        <div>
          <Validation error={loginError}>
            <input
              className={styles.input}
              type="text"
              value={loginText}
              onChange={loginChangeHandler}
            />
          </Validation>
        </div>
        <div>
          <Validation error={passwordError}>
            <input
              className={styles.input}
              type="password"
              value={passwordText}
              onChange={passwordChangeHandler}
            />
          </Validation>
        </div>
        <div>
          Don't have an account? <br />
          <Link to="/register">Registration</Link>
        </div>
        <button onClick={clickHandler} className={styles.btn}>
          Log in
        </button>
      </div>
    </div>
  );
};
