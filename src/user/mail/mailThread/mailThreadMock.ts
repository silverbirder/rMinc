import IMailThread from "./iMailThread";
import IMailMessage from "../mailMessage/iMailMessage";
import ILabel from "../label/iLabel";

export default class MailThreadMock implements IMailThread {
    getMessages(): Array<IMailMessage> {
        return []
    }

    getPermalink(): string {
        return ''
    }

    addLabel(label: ILabel): IMailThread {
        return new MailThreadMock()
    }
}