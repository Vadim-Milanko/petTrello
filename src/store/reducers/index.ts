import { Reducer } from 'react';

import { TBoardActions } from '../actionsCreators/board/types';
import { TUiActions } from '../actionsCreators/ui/types';
import { TAuthUserActions } from '../actionsCreators/user/types';
import {
  IBoard, ITodoColumn, IUi, IUser,
} from '../initialStore';
import { combineReducers } from '../rootReducer/combineReducer';
import { boardReducer } from './board';
import { uiReducer } from './ui';
import { userReducer } from './user';
import { todosReducer } from './todos';
import { TTodosActions } from '../actionsCreators/todos/types';

export type RootActions =
  TBoardActions
  | TUiActions
  | TAuthUserActions
  | TTodosActions;

export interface IReducers {
  boards: Reducer<IBoard[], TBoardActions>
  ui: Reducer<IUi, TUiActions>
  user: Reducer<IUser, TAuthUserActions>
  todos: Reducer<ITodoColumn[], TTodosActions>
}

export const rootReducer = combineReducers({
  boards: boardReducer,
  ui: uiReducer,
  user: userReducer,
  todos: todosReducer,
});
