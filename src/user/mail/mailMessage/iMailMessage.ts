export default interface IMailMessage {
    getSubject(): string;

    getBody(): string;

    getDate(): Date | GoogleAppsScript.Base.Date;
}