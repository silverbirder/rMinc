export default interface IMailMessage {
    subject?: string;
    body?: string;
    date?: Date;

    getSubject(): string;

    getBody(): string;

    getDate(): Date | GoogleAppsScript.Base.Date;
}