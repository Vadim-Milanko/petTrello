import { TBoardActions } from '../actionsCreators/board/types';
import { TUiActions } from '../actionsCreators/ui/types';
import { TAuthUserActions } from '../actionsCreators/user/types';
import { IAppStore } from '../initialStore';

export type ActionTypes = TBoardActions | TUiActions | TAuthUserActions;

type ReducerType<T> = (state: IAppStore, action: T) => IAppStore;

interface IReducers {
  boardReducer: ReducerType<TBoardActions>;
  userReducer: ReducerType<TAuthUserActions>;
  uiReducer: ReducerType<TUiActions>;
}

export const combineReducers = (reducers: IReducers) => (
  state: IAppStore,
  action: ActionTypes | Promise<ActionTypes>,
) => Object.keys(reducers).reduce(
  (acc, prop) => ({
    ...acc,
    // @ts-ignore
    ...reducers[prop]({ [prop]: acc[prop] }, action),
  }),
  state,
);
