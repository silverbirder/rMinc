import IMailRule from "./mailRule/iMailRule";
import IMail from "./mail/iMail";

export default interface IUser {
    setMailRule(mailRules: Array<IMailRule>): void;
    getMails(): Array<IMail>;
}