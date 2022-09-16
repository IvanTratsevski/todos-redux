import React, { useEffect, useRef } from "react";
import { UserInput } from "../../components/user-input";
import { TodoList } from "../../components/todo-list";
import { TodoFilter } from "../../components/todo-filter";
import { storeTodos } from "../../utils/storeTodos";
import { useDispatch } from "react-redux";
import { loadTodos } from "../../redux/actions/async-actions";
import styles from "./index.module.css";

export const TodoPage = () => {
  const todoInputRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodos());
  }, [])


  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <UserInput />
      </div>
      <div className={styles.rightSide}>
        <TodoFilter />
        <TodoList />
      </div>
    </div>
  );
};
