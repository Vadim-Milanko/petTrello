export interface IUser {
  login: string;
  email: string;
  id: string;
}

export interface IToast {
  isActive: boolean;
  message: string;
  severity: string;
}

export interface ILoader {
  isActive: boolean;
}

export interface IUi {
  toast: IToast;
  loader: ILoader;
}

export interface IBoard {
  id: string;
  title: string;
}

export interface ITodoList {
  id: string;
  title: string;
}

export interface ITodoColumn {
  id: string;
  title: string;
  todoList: ITodoList[]
}

export interface IAppStore {
  user: IUser;
  boards: IBoard[];
  ui: IUi;
  todos: ITodoColumn[];
}

export const initialStore = {
  user: {
    login: '',
    email: '',
    id: '',
  },
  boards: [] as IBoard[],
  ui: {
    toast: {
      isActive: false,
      message: '',
      severity: '',
    },
    loader: {
      isActive: false,
    },
  },
  todos: [] as ITodoColumn[],
};
