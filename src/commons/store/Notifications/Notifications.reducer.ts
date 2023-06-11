import { randomNumber } from '../../utils/numbers.utils';
import * as types from './Notifications.types';
import { INotificationStore } from './Notifications.interface';

export const INITIAL_STATE: INotificationStore = {
  notifications: [],
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.ADD:
      // Check if we have a duplicate message
      if (
        state.notifications.find(
          (notification) => notification.text === action.notification.text
        )
      ) {
        return state;
      }
      return {
        ...state,
        notifications: state.notifications.concat([
          { id: randomNumber(), ...action.notification },
        ]),
      };

    case types.REMOVE:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
