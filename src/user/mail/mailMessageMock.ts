import IMailMessage from "./iMailMessage";

export default class MailMessageMock implements IMailMessage {
    getSubject(): string {
        return '';
    }
}