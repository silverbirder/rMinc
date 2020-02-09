import IMailMessage from "../mailMessage/iMailMessage";

export default interface IMailThread {
    getMessages(): Array<IMailMessage>;
}