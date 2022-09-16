import React from "react";
import { TodoItem } from "../todo-item";
import { getTodosByFilter, getIsLoading } from "../../redux/selectors";
import { useSelector } from "react-redux";
import action from "../../redux/actions/creators";
import { ReactComponent as Preloader } from "../../img/preloader.svg";
import styles from "./index.module.css";

export const TodoList = () => {
  const todosIsLoading = useSelector(getIsLoading);
  const todos = useSelector(getTodosByFilter);
  return (
    <ul className={styles.wrapper}>
      {todosIsLoading ? 
        <Preloader/> : 
        todos.map(({ id, ...otherProps }) => (
          <TodoItem key={id} id={id} {...otherProps} />
        ))}
    </ul>
  );
};
