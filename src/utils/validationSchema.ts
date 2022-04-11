import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  login: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  password: Yup.string().required('Required'),
});

export const logInSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  password: Yup.string().required('Required'),
});

export const newBoardSchema = Yup.object({
  title: Yup.string().required('👋\n'
    + 'Enter a name for the board.'),
});
