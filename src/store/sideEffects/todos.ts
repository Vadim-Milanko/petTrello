import { Dispatch } from 'react';

import {
  fetchTodoListAction,
} from '../actionsCreators/todos';
import todosApi from '../../api/Todos';

export const fetchTodoList = () => async (dispatch: Dispatch<any>) => {
  const todoList = await todosApi.fetchTodoList();

  dispatch(fetchTodoListAction(todoList));
};
