import { TODOS } from "../../constants";
import { TODO, USER } from "./types";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
export const createUser = (email, password) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        dispatch({
          type: USER.USER_REGISTER,
          payload: {
            currentUser: user,
          },
        });
        // console.log(user.email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
};
