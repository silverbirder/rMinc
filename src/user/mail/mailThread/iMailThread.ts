import IMailMessage from "../mailMessage/iMailMessage";
import ILabel from "../label/iLabel";

export default interface IMailThread {
    getMessages(): Array<IMailMessage>;

    getPermalink(): string;

    addLabel(label: ILabel): IMailThread;
}