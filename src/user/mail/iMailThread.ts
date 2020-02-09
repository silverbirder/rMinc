import IMailMessage from "./iMailMessage";

export default interface IMailThread {
    getMessages(): Array<IMailMessage>;
}