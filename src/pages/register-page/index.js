import { useState } from "react";
import { Validation } from "../../compound/validation";
import { VALIDATION_TYPE } from "../../utils/validate";
import { validate } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../../redux/actions/async-actions";
import { useDispatch } from "react-redux";
import { ErrorPopup } from "../../components/error-popup";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { getAuthError } from "../../redux/selectors";

const { ONLY_NUMBERS, NO_SPACES, ONE_UPPERCASE, ONE_SPEC_SYMBOL } =
  VALIDATION_TYPE;

const loginConfig = [ONLY_NUMBERS, NO_SPACES];
const passwordConfig = [ONE_UPPERCASE, ONE_SPEC_SYMBOL, NO_SPACES];

export const RegisterPage = () => {
  const authError = useSelector(getAuthError);
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
    const passwordConfirmError = 
    passwordText !== passwordConfirmText
      ? "Please enter equal passwords"
      : validate(passwordConfirmText, passwordConfig);
    setLoginError(loginError);
    setPasswordError(passwordError);
    setPasswordConfirmError(passwordConfirmError);
    if (!loginError && !passwordError && !passwordConfirmError) {
      dispatch(userAuth(loginText, passwordText, 'register', () => {
        navigate("/todos");
      }));
    }
  };

  const loginChangeHandler = ({ target: { value } }) => {
    setLoginText(value);
  };

  const passwordChangeHandler = ({ target: { value } }) => {
    setPasswordText(value);
  };
  const passwordConfirmTextHandler = ({ target: { value } }) => {
    setPasswordConfirmText(value);
  };

  return (
    <div className={styles.wrapper}>
      {authError && <ErrorPopup/>}
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
          <Validation error={passwordConfirmError}>
            <input
              className={styles.input}
              type="password"
              value={passwordConfirmText}
              onChange={passwordConfirmTextHandler}
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
