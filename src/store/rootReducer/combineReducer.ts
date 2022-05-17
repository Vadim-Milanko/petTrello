import { IAppStore } from '../initialStore';
import { IReducers, RootActions } from '../reducers';

type StateSlice = ValueOf<IAppStore>
type Action = RootActions | Promise<RootActions>;

export const combineReducers = (reducers: IReducers) => (
  (state: IAppStore, action: Action): IAppStore => (
    Object.keys(reducers).reduce((prevReducers, reducerKey) => {
      const slicedState = state[reducerKey as keyof IAppStore];
      const reducer = reducers[reducerKey as keyof IAppStore] as
        (prevState: StateSlice, action: Action) => StateSlice;

      return ({
        ...prevReducers,
        [reducerKey]: reducer(slicedState, action),
      });
    }, {} as IAppStore)
  )
);
