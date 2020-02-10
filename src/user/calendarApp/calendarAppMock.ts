import ICalendarApp from "./iCalendarApp";
import ICalendar from "../calendar/iCalendar";
import CalendarMock from "../calendar/calendarMock";

export default class CalendarAppMock implements ICalendarApp {
    getCalendarByName(name: string): ICalendar {
        return new CalendarMock();
    }

    createCalendar(name: string): ICalendar {
        return new CalendarMock();
    }
}