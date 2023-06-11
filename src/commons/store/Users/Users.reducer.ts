import { IUsersStore } from './Users.interface';
import * as types from './Users.types';

export const INITIAL_STATE: IUsersStore = {
  users: {
    items: [],
    hasMore: false,
    quotaMax: 0,
    quotaRemaining: 0,
  },
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.UPDATE_USERS: {
      return { ...state, users: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
