export const chekOnRegistred = (currentUsers: IUser[], newUser: IUser): boolean => {
  const duplicateEmail = currentUsers.find(user => user.email === newUser.email);

  return typeof(duplicateEmail) !== 'undefined';
}
