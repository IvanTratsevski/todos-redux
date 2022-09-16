import { createStore, applyMiddleware } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { userReducer } from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
// const rootReducer = {
// 	todo: todoReducer,
// 	user: userReducer
// };

const middlewares = [thunk];
const rootReducer = {
  todos: todoReducer,
  user: userReducer,
};
export const store = createStore(
  combineReducers(rootReducer),
  composeWithDevTools(applyMiddleware(...middlewares))
);
