import { useEffect, useState } from "react";
import { Validation } from "../../compound/validation";
import { VALIDATION_TYPE } from "../../utils/validate";
import { validate } from "../../utils/validate";
import { useNavigate, Link } from "react-router-dom";
import { userAuth } from "../../redux/actions/async-actions";
import { useDispatch, useSelector } from "react-redux";
import { getAuthError, getCurrentUser } from "../../redux/selectors";
import { UserInfo } from "../../components/user-info";
import { ErrorPopup } from "../../components/error-popup";
import styles from "./index.module.css";

const { ONLY_NUMBERS, NO_SPACES, ONE_UPPERCASE, ONE_SPEC_SYMBOL } =
  VALIDATION_TYPE;

const loginConfig = [ONLY_NUMBERS, NO_SPACES];
const passwordConfig = [ONE_UPPERCASE, ONE_SPEC_SYMBOL, NO_SPACES];

export const LoginPage = () => {
  const { currentUser } = useSelector(getCurrentUser);
  const authError = useSelector(getAuthError);
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginText, setLoginText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      navigate("/todos");
    }
  }, [navigate, currentUser]);
  const clickHandler = () => {
    const loginError = validate(loginText, loginConfig);
    const passwordError = validate(passwordText, passwordConfig);

    setLoginError(loginError);
    setPasswordError(passwordError);

    if (!loginError && !passwordError) {
      dispatch(
        userAuth(loginText, passwordText, "signin", () => {
          // navigate("/todos");
        })
      );
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
      {authError && <ErrorPopup />}
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
