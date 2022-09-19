import { TODOS } from "../../constants";
import { TODO, USER } from "./types";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { getTodos } from "../selectors";
const USER_AUTH_CONFIG = {
  register: createUserWithEmailAndPassword,
  signin: signInWithEmailAndPassword,
};
export const loadTodos = () => {
  return (dispatch) => {
    dispatch({
      type: TODO.TODO_LOADING,
      payload: {
        isLoading: true,
      },
    });
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => data.json())
      .then((todos) => {
        dispatch({
          type: TODO.TODO_FETCH_COMPLETE,
          payload: {
            todos,
          },
        });
      })
      .finally(() => {
        dispatch({
          type: TODO.TODO_LOADING,
          payload: {
            isLoading: false,
          },
        });
      });
  };
};
export const userAuth = (email, password, type, afterAuth) => {
  return (dispatch) => {
    USER_AUTH_CONFIG[type](auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({
          type: USER.USER_REGISTER,
          payload: {
            currentUser: user,
          },
        });
        afterAuth && afterAuth();
        return user;
      })
      .then((user) => {
        return setDoc(doc(db, "users", user.uid), {
          todos: {},
        });
      })
      .catch((error) => {
        dispatch({
          type: USER.USER_ERROR,
          payload: {
            authError: error,
          },
        });
      });
  };
};
export const userLogOut = () => {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch({
          type: USER.USER_LOGOUT,
          payload: "",
        });
      })
      .catch((error) => {});
  };
};
export const addTodo = (todoText) => {
  return (dispatch, getState) => {
    const {
      user: { user: uid },
    } = getState();
    // const newTodoId = todos.at(-1)?.id + 1;
    const todo = {
      todoText,
      done: false,
    };
    setDoc(db.collection("users").doc(uid).collection("todos"), {
      todoText,
      done: false,
    });
    dispatch({
      type: TODO.TODO_ADD,
      payload: {
        todo,
      },
    });
  };
};
