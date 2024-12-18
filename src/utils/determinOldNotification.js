export const isOldNoification = ({ notification }) => {
    const oldNotification = localStorage.getItem('notification');

    if (Object.entries(oldNotification).length === 0 && Object.entries(notification).length === 0) {
        return true;
    } else if (Object.entries(oldNotification).length === 0 && Object.entries(notification).length !== 0) {
        localStorage.setItem('notification', JSON.stringify(notification));
        return false;
    } else if (Object.entries(oldNotification).length != 0 && Object.entries(notification).length === 0) {
        return false;
    } else if (oldNotification === JSON.stringify(notification)) {
        return true;
    } else {
        localStorage.removeItem('notification');
        localStorage.setItem('notification', JSON.stringify(notification));
        return false;
    }
};
