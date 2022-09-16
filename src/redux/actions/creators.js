import { TODO } from "./types";
import { USER } from "./types";
import { bindActionCreators } from "redux";
import { store } from "../index";
import { type } from "@testing-library/user-event/dist/type";

const addTodo = (todoText) => ({
  type: TODO.TODO_ADD,
  payload: {
    todoText,
  },
});

const deleteTodo = (id) => ({
  type: TODO.TODO_DELETE,
  payload: {
    id,
  },
});

const editTodo = (id, todoText) => ({
  type: TODO.TODO_EDIT,
  payload: {
    id,
    todoText,
  },
});

const todoStatusChange = (id) => ({
  type: TODO.TODO_DONE,
  payload: { id },
});

const setFilter = (filterType) => ({
  type: TODO.TODO_FILTER,
  payload: { filterType },
});
export default bindActionCreators(
  {
    addTodo,
    deleteTodo,
    editTodo,
    todoStatusChange,
    setFilter,
  },
  store.dispatch
);
