import IMailThread from "./iMailThread";
import IMailMessage from "../mailMessage/iMailMessage";

export default class MailThreadMock implements IMailThread {
    getMessages(): Array<IMailMessage> {
        return [];
    }
}