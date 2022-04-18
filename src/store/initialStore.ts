export const initialStore = {
  user: {
    login: '',
    email: '',
    id: '',
  },
  boards: [],
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
};

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

export interface IAppStore {
  user: IUser;
  boards: IBoard[],
  ui: IUi;
}
