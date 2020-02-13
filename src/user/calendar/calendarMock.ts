import ICalendar from "./iCalendar";
import ICalendarEvent from "../calendarEvent/iCalendarEvent";

export default class CalendarMock implements ICalendar {
    calendarEvent: ICalendarEvent = {};

    createEvent(title: string, startTime: Date, endTime: Date, options?: any): ICalendarEvent {
        return this.calendarEvent
    }
}