import ILabel from "../mail/label/iLabel";
import ICalendar from "../calendar/iCalendar";

export default abstract class MailRule {
    filteringKeyword: string = '';
    name: string = '';
    after: string = '';
    before: string = '';
    label?: ILabel;
    calendar?: ICalendar;

    constructor(before?: Date, after?: Date) {
        const now: Date = new Date();
        const tomorrow: Date = new Date(now.getTime());
        tomorrow.setDate(tomorrow.getDate() + 1);
        const yesterday: Date = new Date(now.getTime());
        yesterday.setDate(yesterday.getDate() - 1);
        this.before = this._dateFormat(before === undefined ? tomorrow : before!);
        this.after = this._dateFormat(after === undefined ? yesterday : after!);
    }

    _dateFormat(d: Date): string {
        const MM: string = ("0" + (d.getMonth() + 1)).slice(-2);
        const DD: string = ("0" + d.getDate()).slice(-2);
        return `${d.getFullYear()}/${MM}/${DD}`
    }

    buildQuery(): string {
        return `${this.filteringKeyword} -{label: ${this.buildLabel()}} after:${this.after} before:${this.before}`
    }

    buildLabel(): string {
        return `${LABEL.CONFIRMED}.${this.name}`
    }

    abstract extractDateRange(body: string, baseDate?: Date): DateRange;

    abstract extractLocation(body: string): string;

    abstract extractTitle(body: string): string;
}

export const LABEL = {
    CONFIRMED: 'confirmed',
};

export interface DateRange {
    start: Date,
    end: Date,
}