import { observable, action } from 'mobx';
import { nanoid } from 'nanoid';

export type Notification = {
    id: string;
    type: 'info' | 'warning' | 'success' | 'error';
    title: string;
    message?: string;
};
export class NotificationStore {
    @observable
    notifications: Notification[] = [];

    @action
    addNotification(notification: Omit<Notification, 'id'>) {
        this.notifications.push({ id: nanoid(), ...notification });
    }

    @action
    dismissNotification(id: string) {
        this.notifications = this.notifications.filter(
            (notification) => notification.id !== id
        );
    }
}
