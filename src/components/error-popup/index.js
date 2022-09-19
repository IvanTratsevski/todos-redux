import React from "react";
import { useSelector } from "react-redux";
import { getAuthError } from "../../redux/selectors";
import { FiAlertCircle } from "react-icons/fi";
import actions from "../../redux/actions/creators";
import styles from "./index.module.css";

export const ErrorPopup = () => {
  let authError = useSelector(getAuthError).message;
  const regex = /(?<=\()[^)]+(?=\))/g;
  authError = authError.match(regex)[0].replace("auth/", "");
  authError = authError.replace(/-/g, " ");
  authError = authError[0].toUpperCase() + authError.substring(1);
  const { setAuthError } = actions;

  const closePopUpHandler = () => {
    setAuthError();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.popup}>
        <div className={styles.errorTitle}>
          <FiAlertCircle className={styles.alertIcon} />
          Error!
          <FiAlertCircle className={styles.alertIcon} />
        </div>
        <div>{authError}</div>
        <button onClick={closePopUpHandler} className={styles.closeBtn}>
          Close
        </button>
      </div>
    </div>
  );
};
