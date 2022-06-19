import { Reducer } from 'react';

import { TBoardActions } from '../actionsCreators/board/types';
import { TUiActions } from '../actionsCreators/ui/types';
import { TAuthUserActions } from '../actionsCreators/user/types';
import {
  IBoard, ITodoColumn, ITodoItem, IUi, IUser,
} from '../initialStore';
import { combineReducers } from '../rootReducer/combineReducer';
import { boardReducer } from './board';
import { uiReducer } from './ui';
import { userReducer } from './user';
import { todoColumnReducer } from './todoColumn';
import { TTodoColumnActions } from '../actionsCreators/todoColumn/types';
import { todoItemReducer } from './todoItem';
import { TTodoItemActions } from '../actionsCreators/todoItem/types';

export type RootActions =
  TBoardActions
  | TUiActions
  | TAuthUserActions
  | TTodoColumnActions;

export interface IReducers {
  boards: Reducer<IBoard[], TBoardActions>
  ui: Reducer<IUi, TUiActions>
  user: Reducer<IUser, TAuthUserActions>
  todoColumn: Reducer<ITodoColumn[], TTodoColumnActions>
  todoItem: Reducer<ITodoItem[], TTodoItemActions>
}

export const rootReducer = combineReducers({
  boards: boardReducer,
  ui: uiReducer,
  user: userReducer,
  todoColumn: todoColumnReducer,
  todoItem: todoItemReducer,
});
