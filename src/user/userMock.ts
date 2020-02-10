import IUser, {StockMailThreads} from "./iUser";
import MailRule from "./mailRule/mailRule";
import MailAppMock from "./mail/mailApp/mailAppMock";
import IMailApp from "./mail/mailApp/iMailApp";
import ICalendar from "./calendar/iCalendar";
import ICalendarApp from "./calendarApp/iCalendarApp";
import CalendarAppMock from "./calendarApp/calendarAppMock";
import CalendarMock from "./calendar/calendarMock";
import ILabel from "./mail/label/iLabel";
import LabelMock from "./mail/label/labelMock";

export default class UserMock implements IUser {
    mailApp: IMailApp = new MailAppMock();
    mailRules: Array<MailRule> = [];
    label: ILabel = new LabelMock();
    stockMailThreads: Array<StockMailThreads> = [];
    calendarApp: ICalendarApp = new CalendarAppMock();
    calendar: ICalendar = new CalendarMock();

    fetchMails(): void {
        this.stockMailThreads = [];
    }

    setMailRules(mailRules: Array<MailRule>) {
    };

    doRMinc() {

    }
}