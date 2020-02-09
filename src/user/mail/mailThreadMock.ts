import IMailThread from "./iMailThread";
import IMailMessage from "./iMailMessage";

export default class MailThreadMock implements IMailThread {
    getMessages(): Array<IMailMessage> {
        return [];
    }
}