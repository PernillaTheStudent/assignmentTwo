import { isAfter, isBefore, isToday, set } from "date-fns";

function isBeforeOrAfter(date) {
    const today = set(new Date(), {hours: 0, minutes: 0, seconds: 0, milliseconds: 0});
    
    if (isBefore(date, today)) {
        return -1;
    } else if (isAfter(date, today)) {
        return 1;
    } else if (isToday(date)) {
        return 0;
    } else {
        return null;
    }
}

export default isBeforeOrAfter