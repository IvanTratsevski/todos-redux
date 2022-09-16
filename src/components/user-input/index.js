import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Validation } from "../../compound/validation";
import { validate, VALIDATION_TYPE } from "../../utils/validate";
import actions from "../../redux/actions/creators";

export const UserInput = ({ inputRef }) => {
  const [todoText, setTodoText] = useState("");
  const [error, setError] = useState("");
  const { addTodo } = actions;

  const onChangeHandler = ({ target: { value } }) => {
    setTodoText(value);
    if (error) {
      setError("");
    }
  };

  const onClickHandler = () => {
    const validateTodoTextConfig = [
      VALIDATION_TYPE.IS_EMPTY,
      VALIDATION_TYPE.ONLY_NUMBERS,
      VALIDATION_TYPE.MIN_LENGTH,
    ];

    const validateMessage = validate(todoText, validateTodoTextConfig);

    if (validateMessage) {
      setError(validateMessage);
    } else {
      addTodo(todoText);
      setTodoText("");
    }
  };

  const onEnterKeyDownHandler = ({ key }) => {
    if (key === "Enter") {
      onClickHandler();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onEnterKeyDownHandler);

    return () => {
      window.removeEventListener("keydown", onEnterKeyDownHandler);
    };
  }, [todoText]);

  return (
    <div className={styles.wrapper}>
      <Validation error={error}>
        <input
          value={todoText}
          onChange={onChangeHandler}
          className={styles.input}
          type="text"
          ref={inputRef}
          autoFocus
        />
      </Validation>
      <button className={styles.button} onClick={onClickHandler}>
        {" "}
        Add{" "}
      </button>
    </div>
  );
};
