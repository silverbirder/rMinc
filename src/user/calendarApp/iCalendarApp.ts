import ICalendar from "../calendar/iCalendar";

export default interface ICalendarApp {
    getCalendarByName(name: string): ICalendar

    createCalendar(name: string): ICalendar
}