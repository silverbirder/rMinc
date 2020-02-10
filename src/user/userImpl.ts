import IUser, {StockMailThreads} from "./iUser";
import MailRule, {DateRange} from "./mailRule/mailRule";
import IMailThread from "./mail/mailThread/iMailThread";
import IMailApp from "./mail/mailApp/iMailApp";
import ILabel from "./mail/label/iLabel";
import ICalendarApp from "./calendarApp/iCalendarApp";
import ICalendar from "./calendar/iCalendar";
import IMailMessage from "./mail/mailMessage/iMailMessage";
import MailAppImpl from "./mail/mailApp/mailAppImpl";
import CalendarAppImpl from "./calendarApp/calendarAppImpl";

export default class UserImpl implements IUser {
    mailApp: IMailApp = new MailAppImpl();
    mailRules: Array<MailRule> = [];
    label?: ILabel;
    stockMailThreads: Array<StockMailThreads> = [];
    calendarApp: ICalendarApp = new CalendarAppImpl();
    calendar?: ICalendar;

    fetchMails(): void {
        this.mailRules.forEach((mailRule: MailRule) => {
            const mailThreads: Array<IMailThread> = this.mailApp.search(mailRule.buildQuery());
            this.stockMailThreads.push({rule: mailRule, mailThreads: mailThreads})
        })
    }

    doRMinc(): void {
        this.stockMailThreads.forEach((stockMailThreads: StockMailThreads) => {
            stockMailThreads.mailThreads.forEach((mailThread: IMailThread) => {
                mailThread.getMessages().forEach((mailMessage: IMailMessage) => {
                    const body: string = mailMessage.getBody();
                    const mailDate: Date = new Date(mailMessage.getDate().getTime());
                    const dateRange: DateRange = stockMailThreads.rule.extractDateRange(body, mailDate);
                    const location: string = stockMailThreads.rule.extractLocation(body);
                    const subject: string = mailMessage.getSubject();
                    this.calendar!.createEvent(subject, dateRange.start, dateRange.end, {
                        description: mailThread.getPermalink(),
                        location: location
                    });
                });
                mailThread.addLabel(this.label!);
            });
        });
    }

    setMailRules(mailRules: Array<MailRule>) {
        mailRules.forEach((mailRule: MailRule) => {
            const mailLabel: string = mailRule.buildLabel();
            this.label = this.mailApp.getUserLabelByName(mailLabel);
            if (!this.label) {
                this.label = this.mailApp.createLabel(mailLabel);
            }
            this.calendar = this.calendarApp.getCalendarByName(mailLabel);
            if (!this.calendar) {
                this.calendar = this.calendarApp.createCalendar(mailLabel);
            }
        });
        this.mailRules = mailRules;
    };
}