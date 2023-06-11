import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeNotification } from '../../commons/store/Notifications/Notifications.actions';
import {
  INotification,
  NotificationColor,
} from '../../commons/store/Notifications/Notifications.interface';

export const NotificationContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px;
  border-radius: 4px;
  z-index: 9999;
`;

export const NotificationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

interface NotificationProps {
  notification: INotification;
}

const Notifications = ({ notification }: NotificationProps) => {
  const dispatch = useDispatch();

  const getNotificationStyles = () => {
    switch (notification.type) {
      case NotificationColor.positive:
        return {
          backgroundColor: '#4caf50',
          color: '#fff',
        };
      case NotificationColor.danger:
        return {
          backgroundColor: '#f44336',
          color: '#fff',
        };
      default:
        break;
    }

    return {};
  };

  const notificationStyles = getNotificationStyles();

  return (
    <NotificationContainer style={notificationStyles}>
      <NotificationContent>
        <p>{notification.text}</p>
        <CloseButton
          onClick={() => dispatch(removeNotification(notification.id!))}>
          x
        </CloseButton>
      </NotificationContent>
    </NotificationContainer>
  );
};

export default Notifications;
