import IUser from "../src/user/iUser";
import UserMock from "../src/user/userMock";
import AmazonMailRuleMock from "../src/user/mailRule/AmazonMailRuleMock";
import IMail from "../src/user/mail/iMail";

describe('Class: User', () => {
    describe('Method: TBD', () => {
        describe('Args: TBD', () => {
            it('Assert: TBD', () => {
                const user: IUser = new UserMock();
                user.setMailRule([new AmazonMailRuleMock()]);
                const mails: Array<IMail> = user.getMails();
                mails.forEach((mail: IMail) => {
                    mail.toCalendar();
                });
            });
        });
    });
});