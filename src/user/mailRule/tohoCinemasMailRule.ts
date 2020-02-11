import MailRule, {DateRange} from "./mailRule";

export default class TohoCinemasMailRule extends MailRule {
    extractLocation(body: string): string {
        // ■映画館 Theater XXXX　XXXX XXXX
        const messageMatch: RegExp = new RegExp('映画館(.+)');
        const matchedMessage: RegExpMatchArray | null = body.match(messageMatch);
        if (matchedMessage === null) {
            throw Error('Not found location message');
        }
        // Theater　XXXX XXXX XXXX　
        const message: string = matchedMessage[1].trim();
        const location: string = message.replace(/^Theater/, '').trim();
        return location
    }

    extractDateRange(body: string): DateRange {
        // ■上映日 Date 2018/9/23　■時間 Time 18:30～
        const messageMatch: RegExp = new RegExp('上映日(.+)');
        const matchedMessage: RegExpMatchArray | null = body.match(messageMatch);
        if (matchedMessage === null) {
            throw Error('Not found date range message');
        }
        //  Date 2018/9/23　■時間 Time 18:30～
        const message: string = matchedMessage[1];
        const matchedDate: RegExpMatchArray | null = message.match(/(\d+\/\d+\/\d+)/);
        const matchedTime: RegExpMatchArray | null = message.match(/(\d+:\d+)/);
        if (matchedDate === null || matchedTime === null) {
            throw Error('Not found date range');
        }
        const dateStr: string = matchedDate[1];
        const timeStr: string = matchedTime[1];
        const dateAry: Array<string> = dateStr.split(/\//);
        const timeAry: Array<string> = timeStr.split(/:/);
        const year: number = parseInt(dateAry[0], 10);
        const month: number = parseInt(dateAry[1], 10);
        const day: number = parseInt(dateAry[2], 10);
        const hour: number = parseInt(timeAry[0], 10);
        const minute: number = parseInt(timeAry[1], 10);
        return {
            start: new Date(year, month - 1, day, hour, minute),
            end: new Date(year, month - 1, day, hour, minute),
        }
    }

    extractTitle(body: string) {
        // ■映画名称 Movie （吹）プーと大人になった僕 CHRISTOPHER ROBIN / JAPANESE
        const messageMatch: RegExp = new RegExp('映画名称(.+)');
        const matchedMessage: RegExpMatchArray | null = body.match(messageMatch);
        if (matchedMessage === null) {
            throw Error('Not found title message');
        }
        //  （吹）プーと大人になった僕 CHRISTOPHER ROBIN / JAPANESE
        const title: string = matchedMessage[1].trim().replace(/^Movie/, '').trim();
        return title;
    }

    name = 'toho_cinemas';
    filteringKeyword = 'from:(i-net.ticket@ml.tohotheater.jp)';
}