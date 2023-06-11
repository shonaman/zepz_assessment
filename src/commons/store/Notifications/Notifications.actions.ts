import { INotification } from './Notifications.interface';
import * as types from './Notifications.types';

export const addNotification = (notification: INotification) => ({
  type: types.ADD,
  notification,
});

export const removeNotification = (id: number) => ({ type: types.REMOVE, id });
