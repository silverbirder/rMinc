import MailRule, {DateRange} from "./mailRule";

export default class AmazonMailRule extends MailRule {
    extractDateRange(body: string): DateRange {
        return {start: new Date(), end: new Date()};
    }

    name = 'amazon';
    filteringKeyword = 'from:(shipment-tracking@amazon.co.jp) 発送';
}