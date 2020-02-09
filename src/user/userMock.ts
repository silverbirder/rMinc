import IUser, {StockMailThreads} from "./iUser";
import MailRule from "./mailRule/mailRule";
import MailAppMock from "./mail/mailApp/mailAppMock";
import IMailApp from "./mail/mailApp/iMailApp";

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