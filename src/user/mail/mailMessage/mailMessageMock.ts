import IMailMessage from "./iMailMessage";

export default class MailMessageMock implements IMailMessage {
    subject: string = '';
    body: string = '';
    date: Date = new Date();

    getSubject(): string {
        return this.subject
    }

    getBody(): string {
        return this.body;
    }

    getDate(): Date {
        return this.date;
    }
}