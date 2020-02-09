import MailRule from "./mailRule/mailRule";
import IMailThread from "./mail/mailThread/iMailThread";
import IMailApp from "./mail/mailApp/iMailApp";

export default interface IUser {
    mailRules: Array<MailRule>
    mailApp: IMailApp
    stockMailThreads: Array<StockMailThreads>

    fetchMails(): void

    setMailRules(mailRules: Array<MailRule>): void

    doRMinc(): void
}

export interface StockMailThreads {
    rule: MailRule
    mailThreads: Array<IMailThread>
}