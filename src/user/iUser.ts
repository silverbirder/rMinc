import MailRule from "./mailRule/mailRule";
import IMailThread from "./mail/mailThread/iMailThread";
import IMailApp from "./mail/mailApp/iMailApp";
import ICalendarApp from "./calendarApp/iCalendarApp";
import ICalendar from "./calendar/iCalendar";
import ILabel from "./mail/label/iLabel";

export default interface IUser {
    mailRules: Array<MailRule>
    mailApp: IMailApp
    label?: ILabel;
    stockMailThreads: Array<StockMailThreads>
    calendarApp: ICalendarApp;
    calendar?: ICalendar;

    fetchMails(): void

    setMailRules(mailRules: Array<MailRule>): void

    doRMinc(): void
}

export interface StockMailThreads {
    rule: MailRule
    mailThreads: Array<IMailThread>
}