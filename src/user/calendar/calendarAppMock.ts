import ICalendarApp from "./iCalendarApp";
import ICalendar from "./iCalendar";

export default class CalendarAppMock implements ICalendarApp {
    getCalendarByName(name: string): ICalendar {
        return {}
    }

    createCalendar(name: string): ICalendar {
        return {}
    }
}