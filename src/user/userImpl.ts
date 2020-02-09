import IUser, {StockMailThreads} from "./iUser";
import MailRule from "./mailRule/MailRule";
import IMailThread from "./mail/iMailThread";
import IMailApp from "./mail/iMailApp";
import ILabel from "./mail/iLabel";
import ICalendarApp from "./calendar/iCalendarApp";
import ICalendar from "./calendar/iCalendar";
import IMailMessage from "./mail/iMailMessage";
import MailAppImpl from "./mail/mailAppImpl";
import CalendarAppImpl from "./calendar/calendarAppImpl";

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
                    const subject: string = mailMessage.getSubject();
                    Logger.log(subject);
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