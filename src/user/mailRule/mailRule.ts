export default abstract class MailRule {
    filteringKeyword: string = '';
    name: string = '';
    after: string = '';
    before: string = '';

    constructor() {
        const now: Date = new Date();
        const MM: string = ("0" + (now.getMonth() + 1)).slice(-2);
        const DD: string = ("0" + now.getDate()).slice(-2);
        const YYYYMMDD = `${now.getFullYear()}/${MM}/${DD}`;
        this.before = YYYYMMDD;
        this.after = YYYYMMDD;
    }

    buildQuery(): string {
        return `${this.filteringKeyword} -{label: ${this.buildLabel()}} after:${this.after} before:${this.before}`
    }

    buildLabel(): string {
        return `${this.name}.${LABEL.CONFIRMED}`
    }

    abstract extractDateRange(body: string, baseDate?: Date): DateRange;

    abstract extractLocation(body: string): string;
}

export const LABEL = {
    CONFIRMED: 'confirmed',
};

export interface DateRange {
    start: Date,
    end: Date,
}