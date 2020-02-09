import MailRule from "./MailRule";

export default class AmazonMailRule extends MailRule {
    name = 'amazon';
    filteringKeyword = 'from:(shipment-tracking@amazon.co.jp)';
}