import IMailMessage from "./iMailMessage";

export default class MailMessageMock implements IMailMessage {
    getSubject(): string {
        return ''
    }

    getBody(): string {
        return ''
    }

    getDate(): Date {
        return new Date()
    }
}