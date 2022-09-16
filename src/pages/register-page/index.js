import { useState } from "react";
import { Validation } from "../../compound/validation";
import { VALIDATION_TYPE } from "../../utils/validate";
import { validate } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../firebase";
import { createUser } from "../../redux/actions/async-actions";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";

const { ONLY_NUMBERS, NO_SPACES, ONE_UPPERCASE, ONE_SPEC_SYMBOL } =
  VALIDATION_TYPE;

const loginConfig = [ONLY_NUMBERS, NO_SPACES];
const passwordConfig = [ONE_UPPERCASE, ONE_SPEC_SYMBOL, NO_SPACES];

export const RegisterPage = () => {
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginText, setLoginText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [passwordConfirmText, setPasswordConfirmText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clickHandler = () => {
    const loginError = validate(loginText, loginConfig);
    const passwordError = validate(passwordText, passwordConfig);

    setLoginError(loginError);
    setPasswordError(passwordError);
    dispatch(createUser(loginText, passwordText));
    // getCurrentUser();
    if (!loginError && !passwordError) {
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
        <h1 className={styles.title}>Register</h1>
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
          <Validation error={passwordError}>
            <input
              className={styles.input}
              type="password"
              value={passwordText}
              onChange={passwordChangeHandler}
            />
          </Validation>
        </div>
        <button onClick={clickHandler} className={styles.btn}>
          Reg in
        </button>
      </div>
    </div>
  );
};
