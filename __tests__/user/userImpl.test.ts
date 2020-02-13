import IUser from "../../src/user/iUser";
import UserImpl from "../../src/user/userImpl";
import MailAppMock from "../../src/user/mail/mailApp/mailAppMock";
import CalendarAppMock from "../../src/user/calendarApp/calendarAppMock";
import AmazonMailRule from "../../src/user/mailRule/amazonMailRule";
import * as fs from "fs";
import * as path from "path";
import ShokutakubinMailRule from "../../src/user/mailRule/shokutakubinMailRule";
import TohoCinemasMailRule from "../../src/user/mailRule/tohoCinemasMailRule";
import MailThreadMock from "../../src/user/mail/mailThread/mailThreadMock";

describe('Class: UserImpl', () => {
    describe('Method: setMailRules', function () {
        test('Assert: TODO', () => {
            const user: IUser = new UserImpl();
            user.calendarApp = new CalendarAppMock();
            user.mailApp = new MailAppMock();
            user.setMailRules([new AmazonMailRule(), new ShokutakubinMailRule(), new TohoCinemasMailRule()]);
            user.fetchMails();
            const amazon: string = fs.readFileSync(path.resolve(__dirname, './mailRule/html/amazonMail_mmdd.html'), 'utf8');
            const shokutaku: string = fs.readFileSync(path.resolve(__dirname, './mailRule/html/shokutakubinMail.txt'), 'utf8');
            const toho: string = fs.readFileSync(path.resolve(__dirname, './mailRule/html/tohoCinemasMail.txt'), 'utf8');

            user.stockMailThreads[0].mailThreads = [new MailThreadMock()];
            user.stockMailThreads[0].mailThreads[0].getMessages()[0].body = amazon;
            user.stockMailThreads[1].mailThreads = [new MailThreadMock()];
            user.stockMailThreads[1].mailThreads[0].getMessages()[0].body = shokutaku;
            user.stockMailThreads[2].mailThreads = [new MailThreadMock()];
            user.stockMailThreads[2].mailThreads[0].getMessages()[0].body = toho;

            user.doRMinc();
        });
    });
});