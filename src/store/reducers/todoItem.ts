import { ITodoItem } from '../initialStore';
import { TTodoItemActions } from '../actionsCreators/todoItem/types';
import { TodoItemActionTypes as types } from '../actionTypes/todoItem';

export function todoItemReducer(state: ITodoItem[], action: TTodoItemActions) {
  switch (action.type) {
    case types.GET_TODO_ITEM_ACTION:
      return action.payload;

    case types.ADD_TODO_ITEM_ACTION:
      return [
        ...state,
        action.payload,
      ];

    default:
      return state;
  }
}
