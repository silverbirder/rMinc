import MailRule, {DateRange} from "./mailRule";

export default class MailRuleMock extends MailRule {
    extractLocation(body: string): string {
        return 'location'
    }

    extractDateRange(body: string, baseDate: Date): DateRange {
        return {
            start: new Date(),
            end: new Date(),
        }
    }

    extractTitle(body: string) {
        return 'Title';
    }

    name = 'mock';
    filteringKeyword = 'filteringKeyword';
}