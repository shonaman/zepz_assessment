import { IGetUsersData } from './Users.interface';
import * as types from './Users.types';

export const fetchUsers = (data: IGetUsersData) => ({
  type: types.FETCH_USERS,
  data,
});
