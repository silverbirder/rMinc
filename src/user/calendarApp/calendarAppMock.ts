import ICalendarApp from "./iCalendarApp";
import ICalendar from "../calendar/iCalendar";

export default class CalendarAppMock implements ICalendarApp {
    getCalendarByName(name: string): ICalendar {
        return {}
    }

    createCalendar(name: string): ICalendar {
        return {}
    }
}