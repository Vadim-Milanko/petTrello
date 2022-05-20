import { Reducer } from 'react';
import { TBoardActions } from '../actionsCreators/board/types';
import { TUiActions } from '../actionsCreators/ui/types';
import { TAuthUserActions } from '../actionsCreators/user/types';
import { IBoard, IUi, IUser } from '../initialStore';
import { combineReducers } from '../rootReducer/combineReducer';
import { boardReducer } from './board';
import { uiReducer } from './ui';
import { userReducer } from './user';

export type RootActions =
  TBoardActions
  | TUiActions
  | TAuthUserActions;

export interface IReducers {
  boards: Reducer<IBoard[], TBoardActions>
  ui: Reducer<IUi, TUiActions>
  user: Reducer<IUser, TAuthUserActions>
}

export const rootReducer = combineReducers({
  boards: boardReducer,
  ui: uiReducer,
  user: userReducer,
});
