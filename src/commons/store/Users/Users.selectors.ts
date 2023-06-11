import { createSelector } from 'reselect';
import { INITIAL_STATE } from './Users.reducer';
import { IUsersStore } from './Users.interface';

const _UsersStore = (state: { Users: IUsersStore }) =>
  state ? state.Users : INITIAL_STATE;

// IUsersStore
export const userDataSelector = createSelector(
  [_UsersStore],
  (state) => state.users
);

// Users
export const usersSelector = createSelector(
  [_UsersStore],
  (state) => state.users?.items
);
