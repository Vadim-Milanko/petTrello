import { TodoColumnActionTypes as types } from '../actionTypes/todoColumn';
import { TTodoColumnActions } from '../actionsCreators/todoColumn/types';
import { ITodoColumn } from '../initialStore';

export function todoColumnReducer(state: ITodoColumn[], action: TTodoColumnActions) {
  switch (action.type) {
    case types.GET_TODO_COLUMNS_ACTION:
      return action.payload;

    case types.ADD_TODO_COLUMN_ACTION:
      return [
        ...state,
        action.payload,
      ];

    case types.DELETE_TODO_COLUMN_ACTION:
      return state.filter((todoColumn) => todoColumn.id !== action.payload);

    case types.EDIT_TODO_COLUMN_TITLE_ACTION:
      return state.map((todoColumn) => {
        if (todoColumn.id === action.payload.id) {
          return {
            id: todoColumn.id,
            title: action.payload.title,
          };
        }

        return todoColumn;
      });

    default:
      return state;
  }
}
