import IUser from "../src/user/iUser";
import UserImpl from "../src/user/userImpl";
import MailRule from "../src/user/mailRule/MailRule";
import AmazonMailRule from "../src/user/mailRule/AmazonMailRule";

describe('Class: User', () => {
    describe('Method: TBD', () => {
        describe('Args: TBD', () => {
            it('Assert: TBD', () => {
                const user: IUser = new UserImpl();
                const amazonMailRule: MailRule = new AmazonMailRule();
                user.setMailRules([amazonMailRule]);
                user.fetchMails();
            });
        });
    });
});