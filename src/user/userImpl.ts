import IUser, {StockMailThreads} from "./iUser";
import MailRule from "./mailRule/mailRule";
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
    calendarApp: ICalendarApp = new CalendarAppImpl();
    mailRules: Array<MailRule> = [];
    stockMailThreads: Array<StockMailThreads> = [];

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
                    Logger.log(body);
                    // const dateRange: DateRange = stockMailThreads.rule.extractDateRange(body);
                    // const subject: string = mailMessage.getSubject();
                });
            });
        });
    }

    setMailRules(mailRules: Array<MailRule>) {
        mailRules.forEach((mailRule: MailRule) => {
            const mailLabel: string = mailRule.buildLabel();
            const label: ILabel = this.mailApp.getUserLabelByName(mailLabel);
            if (!label) {
                this.mailApp.createLabel(mailLabel);
            }
            let calendar: ICalendar = this.calendarApp.getCalendarByName(mailLabel);
            if (!calendar) {
                this.calendarApp.createCalendar(mailLabel);
            }
        });
        this.mailRules = mailRules;
    };
}