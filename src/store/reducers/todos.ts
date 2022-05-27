import { TodosActionTypes as types } from '../actionTypes/todos';
import { TTodosActions } from '../actionsCreators/todos/types';
import { ITodoColumn } from '../initialStore';

export function todosReducer(state: ITodoColumn[], action: TTodosActions) {
  switch (action.type) {
    case types.GET_TODO_COLUMNS_ACTION:
      return action.payload;

    case types.ADD_TODO_COLUMN_ACTION:
      return [
        ...state,
        action.payload,
      ];

    default:
      return state;
  }
}
