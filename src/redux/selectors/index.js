import { createSelector } from "reselect";
import { FILTER_CONFIG } from "../../constants";
export const getTodos = (state) => state.todos.todos;
export const getFilter = (state) => state.todos.todosFilter;
export const getIsLoading = (state) => state.todos.isLoading;
export const getIsLoggedIn = (state) => state.user.isLoggedIn;
export const getCurrentUser = (state) => state.user.currentUser;
export const getTodosByFilter = createSelector(
  getTodos,
  getFilter,
  (todos, todosFilter) => {
    return todosFilter === FILTER_CONFIG.ALL
      ? todos
      : todos.filter(
          ({ done }) =>
            (done && todosFilter === FILTER_CONFIG.DONE) ||
            (!done && todosFilter === FILTER_CONFIG.UNDONE)
        );
  }
);
