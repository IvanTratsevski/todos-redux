import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import actions from "../redux/actions/creators";
import { userAuth } from "../redux/actions/async-actions";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBiQrKcg7J31T4zQYbEfAv_XgpA2cgnlTM",
  authDomain: "todo-task-bee97.firebaseapp.com",
  projectId: "todo-task-bee97",
  storageBucket: "todo-task-bee97.appspot.com",
  messagingSenderId: "248492802738",
  appId: "1:248492802738:web:0f5c0e2bc6aa274fe57fab",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const { setCurrentUser } = actions;
export const registerUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      // console.log(user.email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export const signInUser = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
