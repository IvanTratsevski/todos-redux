import {TODOS} from '../constants';

export const storeTodos = (todos) => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
};