import ICalendarApp from "./iCalendarApp";
import ICalendar from "./iCalendar";

export default class CalendarAppImpl implements ICalendarApp {
    getCalendarByName(name: string): ICalendar {
        return CalendarApp.getCalendarsByName(name)[0];
    }
    createCalendar(name: string): ICalendar {
        return CalendarApp.createCalendar(name)
    }
}