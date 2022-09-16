import { TODO } from "../actions/types";
import { TODOS } from "../../constants";
import { FILTER_CONFIG } from "../../constants";

const storageData = localStorage.getItem(TODOS);

let initialTodos = [];

if (storageData !== null) {
  initialTodos = JSON.parse(storageData);
}

const initialState = {
  todos: initialTodos,
  todosFilter: FILTER_CONFIG.ALL,
  isLoading: false,
  error: null,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO.TODO_FETCH_COMPLETE:
      return {
        ...state,
        todos: action.payload.todos.map(({id, title, completed}) => ({
          id: id,
          done: completed,
          todoText: title
        }))
      }
    case TODO.TODO_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    case TODO.TODO_DELETE:
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.payload.id),
      };
    case TODO.TODO_DONE:
      return {
        ...state,
        todos: state.todos.map(({ id, done, ...todo }) => ({
          ...todo,
          id,
          done: id === action.payload.id ? !done : done,
        })),
      };
    case TODO.TODO_ADD:
      const todo = {
        todoText: action.payload.todoText,
        done: false,
        id: Math.random().toString(),
      };

      return {
        ...state,
        todos: [...state.todos, todo],
      };
    case TODO.TODO_EDIT:
      return {
        ...state,
        todos: state.todos.map(({ id, todoText, ...todo }) => ({
          ...todo,
          id,
          todoText:
            id === action.payload.id ? action.payload.todoText : todoText,
        })),
      };
    case TODO.TODO_FILTER:
      return {
        ...state,
        todosFilter: action.payload.filterType,
      };
    default:
      return state;
  }
};
