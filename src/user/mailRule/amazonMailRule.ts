import MailRule, {DateRange} from "./mailRule";

export default class AmazonMailRule extends MailRule {
    extractLocation(body: string): string {
        // お届け先：</span><br> <p> <strong> XXXX 様 <br> XXX-XXXX <br> XXXX <br> XXXX <br> XXXX <br> </strong>
        const messageMatch: RegExp = new RegExp('お届け先.+(?=<strong>)<strong>(.+)(?=<\/strong>)');
        const matchedMessage: RegExpMatchArray | null = body.match(messageMatch);
        if (matchedMessage === null) {
            throw Error('Not found location message');
        }
        //  XXXX 様 <br> XXX-XXXX <br> XXXX <br> XXXX <br> XXXX <br>
        const message: string = matchedMessage[1];
        const location: string = message.split(/<br\s?\/?>/).slice(1).join('').trim();
        return location
    }

    extractDateRange(body: string, baseDate: Date): DateRange {
        // お届け予定日：</span><br> <strong>土曜日, 11/24 08:00 - 12:00</strong>
        const messageMatch: RegExp = new RegExp('お届け予定日?.+(?=<strong>)<strong>(.+)(?=<\/strong>)');
        const matchedMessage: RegExpMatchArray | null = body.match(messageMatch);
        if (matchedMessage === null) {
            throw Error('Not found date range message');
        }
        // 土曜日, 11/24 08:00 - 12:00
        const message: string = matchedMessage[1];
        // 11/24
        const matchedDate: RegExpMatchArray | null = message.match(/(\d+\/\d+)/);
        if (matchedDate === null) {
            throw Error('Not found date range');
        }
        const deliveryDateStr: string = matchedDate[1];

        // 08:00 - 12:00
        const matchedTime: RegExpMatchArray | null = message.match(/(\d+:\d+)\s-\s(\d+:\d+)/);
        let startTimeStr: string = '00:00';
        let endTimeStr: string = '00:00';
        if (matchedTime !== null) {
            startTimeStr = matchedTime[1];
            endTimeStr = matchedTime[2];
        }
        const deliveryDateAry: Array<string> = deliveryDateStr.split(/\//);
        const startTimeAry: Array<string> = startTimeStr.split(/:/);
        const endTimeAry: Array<string> = endTimeStr.split(/:/);
        const month: number = parseInt(deliveryDateAry[0], 10);
        const day: number = parseInt(deliveryDateAry[1], 10);
        const startHour: number = parseInt(startTimeAry[0], 10);
        const startMinute: number = parseInt(startTimeAry[1], 10);
        const endHour: number = parseInt(endTimeAry[0], 10);
        const endMinute: number = parseInt(endTimeAry[1], 10);
        return {
            start: new Date(baseDate.getFullYear(), month - 1, day, startHour, startMinute),
            end: new Date(baseDate.getFullYear(), month - 1, day, endHour, endMinute)
        }
    }

    extractTitle(body: string) {
        return '';
    }

    name = 'amazon';
    filteringKeyword = 'from:(shipment-tracking@amazon.co.jp) 発送';
}