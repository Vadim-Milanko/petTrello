import { TodosActionTypes as types } from '../../actionTypes/todos';
import { ITodo } from '../../initialStore';
import { IBoardData } from '../../../pages/Dashboard/components/PopoverWindow';

export const fetchTodoListAction = (payload: ITodo[]) => ({
  type: types.FETCH_TODO_LIST_SUCCESS,
  payload,
});

export const addBoardAction = (payload: IBoardData) => ({
  type: types.ADD_TODO_ACTION,
  payload,
});
