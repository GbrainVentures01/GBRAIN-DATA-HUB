export const generateRequestId = () => {
    function addZero(i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const hour = addZero(today.getHours());
    const min = addZero(today.getMinutes());
    today = yyyy + mm + dd + hour + min;

    return `${today}${Math.random().toString(36).substring(2, 7)}${Math.floor(Math.random() * 100 + 1)}`;
};
