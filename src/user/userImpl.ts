import IUser from "./iUser";
import IMailRule from "./mailRule/iMailRule";
import IMail from "./mail/iMail";

export default class UserImpl implements IUser {
    getMails(): Array<IMail> {
        return [];
    }

    setMailRule(mailRules: Array<IMailRule>): void {
    }
}