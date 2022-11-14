import {FC} from 'react';
import styles from '@/components/Notification/Notification.module.scss';

export enum NotificationModes {
  INIT = 'INIT',
  MSG = 'MSG',
  ERROR = 'ERROR'
}

interface INotification {
  title: string;
  mode: NotificationModes;
}

const Notification: FC<INotification> = (props) => {
  const {title, mode} = props;

  function getCssClass(mode: NotificationModes): string {
    switch(mode) {
      case NotificationModes.INIT:
        return styles.notificationInit;
      case NotificationModes.MSG:
        return styles.notification;
      case NotificationModes.ERROR:
        return styles.notificationError;
    }
  }

  const cssClass: string = getCssClass(mode);
  return (
    <p className={cssClass}>{title}</p>
  );
}

export default Notification;