import MailRule, {DateRange} from "./mailRule";

export default class ShokutakubinMailRule extends MailRule {
    extractLocation(body: string): string {
        /*
        【お届け先住所】
         　〒XXXXXXX
         XXXX
        【お届け希望日】
         */
        const messageMatch: RegExp = new RegExp('【お届け先住所】([\\s\\S]+?)【お届け希望日】');
        const matchedMessage: RegExpMatchArray | null = body.match(messageMatch);
        if (matchedMessage === null) {
            throw Error('Not found location message');
        }
        const message: string = matchedMessage[1].trim();
        const location: string = message.split(/\n/).join(' ').trim();
        return location
    }

    extractDateRange(body: string): DateRange {
        /*
        【お届け希望日】XXXX年XX月XX日（X）
        【配送希望時間帯】19:00～21:00 or 午前中
         */
        const messageDateMatch: RegExp = new RegExp('【お届け希望日】(.+)');
        const messageTimeMatch: RegExp = new RegExp('【(配送希望時間帯|お届け希望時間帯)】(.+)');
        const matchedDateMessage: RegExpMatchArray | null = body.match(messageDateMatch);
        const matchedTimeMessage: RegExpMatchArray | null = body.match(messageTimeMatch);
        if (matchedDateMessage === null || matchedTimeMessage === null) {
            throw Error('Not found date range message');
        }
        // XXXX年XX月XX日（X）
        const messageDate: string = matchedDateMessage[1];
        // 19:00～21:00 or 午前中
        const messageTime: string = matchedTimeMessage[2];

        // XXXX年XX月XX日
        const matchedDate: RegExpMatchArray | null = messageDate.match(/(\d+)年(\d+)月(\d+)日/);
        if (matchedDate === null) {
            throw Error('Not found date range');
        }
        let matchedTime: RegExpMatchArray | null = messageTime.match(/(\d+):(\d+)～(\d+):(\d+)/);
        let startHour: number = 0;
        let startMinute: number = 0;
        let endHour: number = 0;
        let endMinute: number = 0;
        if (matchedTime !== null) {
            startHour = parseInt(matchedTime![1], 10);
            startMinute = parseInt(matchedTime![2], 10);
            endHour = parseInt(matchedTime![3], 10);
            endMinute = parseInt(matchedTime![4], 10);
        } else {
            matchedTime = messageTime.match(/午前中/);
            if (matchedTime !== null) {
                startHour = 9;
                startMinute = 0;
                endHour = 12;
                endMinute = 0;
            }
        }
        const year: number = parseInt(matchedDate[1], 10);
        const month: number = parseInt(matchedDate[2], 10);
        const day: number = parseInt(matchedDate[3], 10);
        return {
            start: new Date(year, month - 1, day, startHour, startMinute),
            end: new Date(year, month - 1, day, endHour, endMinute),
        }
    }

    extractTitle(body: string) {
        /*
        ・送り状No：XXXX
        Title
         */
        const messageMatch: RegExp = new RegExp('送り状No.+\\s+(.+)');
        const matchedMessage: RegExpMatchArray | null = body.match(messageMatch);
        if (matchedMessage === null) {
            throw Error('Not found title message');
        }
        // Title
        const title: string = matchedMessage[1].trim();
        return title;
    }

    name = 'shokutakubin';
    filteringKeyword = 'from:(shokutakubin@shmail.nifs.co.jp) 配送手配';
}