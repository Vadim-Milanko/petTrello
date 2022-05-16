import { combineReducers } from '../rootReducer/combineReducer';
import { boardReducer } from './board';
import { uiReducer } from './ui';
import { userReducer } from './user';

export const rootReducer = combineReducers({
  boardReducer,
  uiReducer,
  userReducer,
});
