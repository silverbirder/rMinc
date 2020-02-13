import IUser from "../../src/user/iUser";
import UserImpl from "../../src/user/userImpl";
import MailAppMock from "../../src/user/mail/mailApp/mailAppMock";
import CalendarAppMock from "../../src/user/calendarApp/calendarAppMock";
import AmazonMailRule from "../../src/user/mailRule/amazonMailRule";

describe('Class: UserImpl', () => {
    describe('Method: setMailRules', function () {
        test('Assert: TODO', () => {
            const user: IUser = new UserImpl();
            user.calendarApp = new CalendarAppMock();
            user.mailApp = new MailAppMock();
            user.setMailRules([new AmazonMailRule()]);
            user.fetchMails();
        });
    });
});