import IMailThread from "./iMailThread";
import IMailMessage from "../mailMessage/iMailMessage";
import ILabel from "../label/iLabel";
import MailMessageMock from "../mailMessage/mailMessageMock";

export default class MailThreadMock implements IMailThread {
    mailMessages: Array<IMailMessage> = [new MailMessageMock()];

    getMessages(): Array<IMailMessage> {
        return this.mailMessages;
    }

    getPermalink(): string {
        return ''
    }

    addLabel(label: ILabel): IMailThread {
        return this
    }
}