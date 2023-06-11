export interface INotification {
  type: 'info' | 'positive' | 'warning' | 'danger';
  text: string;
  title?: string;
  id?: number;
}

export interface INotificationStore {
  notifications: INotification[];
}

export enum NotificationColor {
  info = 'info',
  positive = 'positive',
  warning = 'warning',
  danger = 'danger',
}
