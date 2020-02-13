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
        this.before = this._dateFormat(before === undefined ? new Date() : before!);
        this.after = this._dateFormat(after === undefined ? new Date() : after!);
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