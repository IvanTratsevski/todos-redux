import React, { useEffect, useRef } from "react";
import { UserInput } from "../../components/user-input";
import { TodoList } from "../../components/todo-list";
import { TodoFilter } from "../../components/todo-filter";
import { storeTodos } from "../../utils/storeTodos";
import { useDispatch } from "react-redux";
import { loadTodos } from "../../redux/actions/async-actions";
import styles from "./index.module.css";
import { UserInfo } from "../../components/user-info";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";

export const TodoPage = () => {
  const {currentUser} = useSelector(getCurrentUser);
  const todoInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(loadTodos());
  }, [])

  useEffect(() => {
    if(!currentUser){
      navigate("/")
    }
  }, [navigate, currentUser])
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <UserInput />
      </div>
      <div className={styles.rightSide}>
        <UserInfo/>
        <TodoFilter />
        <TodoList />
      </div>
    </div>
  );
};
