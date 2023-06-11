import { createSelector } from 'reselect';

const _Notifications = (state: any) =>
  state ? state.Notifications : { notifications: [] };

export const notificationsSelector = createSelector(
  [_Notifications],
  (state) => state.notifications
);
