import ICalendarApp from "./iCalendarApp";
import ICalendar from "../calendar/iCalendar";
import CalendarMock from "../calendar/calendarMock";

export default class CalendarAppMock implements ICalendarApp {
    calendar: ICalendar = new CalendarMock();

    getCalendarByName(name: string): ICalendar {
        return this.calendar;
    }

    createCalendar(name: string): ICalendar {
        return this.calendar;
    }
}