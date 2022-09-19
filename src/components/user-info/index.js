import React from "react";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/selectors";
import { userLogOut } from "../../redux/actions/async-actions";
import { useDispatch } from "react-redux";
import styles from "./index.module.css"


export const UserInfo = () => {
    const {uId, uEmail} = useSelector(getCurrentUser);
    const dispatch = useDispatch();
    const logOutHandler = () => {
        dispatch(userLogOut());
    }
    return (
    <div className={styles.wrapper}>
        <div>{uEmail}</div>
        <button onClick={logOutHandler} className={styles.btn}>Log out</button>
    </div>
    )
}