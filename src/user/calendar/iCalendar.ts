import ICalendarEvent from "../calendarEvent/iCalendarEvent";

export default interface ICalendar {
    createEvent(title: string, startTime: Date, endTime: Date, options?: any): ICalendarEvent;
}