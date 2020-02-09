import MailRule from "./mailRule/MailRule";
import IMailThread from "./mail/iMailThread";
import IMailApp from "./mail/iMailApp";

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