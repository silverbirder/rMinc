import ICalendar from "./iCalendar";

export default interface ICalendarApp {
    getCalendarByName(name: string): ICalendar

    createCalendar(name: string): ICalendar
}