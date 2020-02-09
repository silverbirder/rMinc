import IUser, {StockMailThreads} from "./iUser";
import MailRule from "./mailRule/MailRule";
import MailAppMock from "./mail/mailAppMock";
import IMailApp from "./mail/iMailApp";

export default class UserMock implements IUser {
    mailApp: IMailApp = new MailAppMock();
    mailRules: Array<MailRule> = [];
    stockMailThreads: Array<StockMailThreads> = [];

    fetchMails(): void {
        this.stockMailThreads = [];
    }

    setMailRules(mailRules: Array<MailRule>) {
    };

    doRMinc() {

    }
}