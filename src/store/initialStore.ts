export const initialStore = {
  user: {
    login: '',
    email: '',
  },
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

export interface IAppStore {
  user: IUser;
  ui: IUi;
}
