import { Dispatch } from 'react';

import {
  addTodoColumnAction,
  getTodoColumnsAction,
} from '../actionsCreators/todos';
import todosApi from '../../api/Todos';
import { ITodoColumnData } from '../../pages/Todos';

export const getTodoColumns = () => async (dispatch: Dispatch<any>) => {
  const todoList = await todosApi.fetchTodoColumns();

  dispatch(getTodoColumnsAction(todoList));
};

export const addTodoColumn = (payload: ITodoColumnData) => (
  async (dispatch: any) => {
    const addTodoResponse = await todosApi.addTodoColumn(payload);

    if (!addTodoResponse.hasError) {
      dispatch(addTodoColumnAction(addTodoResponse.currentTodoColumn));
    }
  }
);
