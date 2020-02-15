import IUser, {StockMailThreads} from "../../src/user/iUser";
import UserImpl from "../../src/user/userImpl";
import MailAppMock from "../../src/user/mail/mailApp/mailAppMock";
import CalendarAppMock from "../../src/user/calendarApp/calendarAppMock";
import MailRuleMock from "../../src/user/mailRule/mailRuleMock";
import MailRule from "../../src/user/mailRule/mailRule";
import MailThreadMock from "../../src/user/mail/mailThread/mailThreadMock";
import CalendarMock from "../../src/user/calendar/calendarMock";
import IMailThread from "../../src/user/mail/mailThread/iMailThread";

describe('Class: UserImpl', () => {
    let user: IUser;
    beforeEach(() => {
        user = new UserImpl();
        user.calendarApp = new CalendarAppMock();
        user.mailApp = new MailAppMock();
    });
    describe('Method: setMailRules', () => {
        describe('Data: MailRuleMock', () => {
            test('Assert: set attribute [mailRules]', () => {
                // Arrange
                user.calendarApp.getCalendarByName = jest.fn().mockImplementationOnce((n) => '');
                user.calendarApp.createCalendar = jest.fn().mockImplementationOnce((n) => n);
                user.mailApp.createLabel = jest.fn().mockImplementationOnce((n) => n);
                user.mailApp.getUserLabelByName = jest.fn().mockImplementationOnce((n) => '');

                // Act
                user.setMailRules([new MailRuleMock()]);
                const actualSetMailRule: MailRule = user.mailRules[0];

                // Assert
                expect(actualSetMailRule).toBeDefined();
                expect(actualSetMailRule.label).toBeDefined();
                expect(actualSetMailRule.calendar).toBeDefined();
                expect(user.mailApp.createLabel).toBeCalled();
                expect(user.calendarApp.createCalendar).toBeCalled();
            });
        });
    });
    describe('Method: fetchMails', () => {
        describe('Data: stockMailThreads', () => {
            test('Assert: set attribute [stockMailThreads]', () => {
                // Arrange
                user.mailRules = [new MailRuleMock()];
                user.mailApp.search = jest.fn();
                const expectSetStockMailNumber: number = 1;

                // Act
                user.fetchMails();
                const actualStockMailThreads: Array<StockMailThreads> = user.stockMailThreads;

                // Assert
                expect(actualStockMailThreads).toHaveLength(expectSetStockMailNumber);
                expect(user.mailApp.search).toBeCalled();
            });
        });
    });
    describe('Method: doRMinc', () => {
        describe('Data: single stockMailThread', () => {
            test('Assert: called createEvent, addLabel', () => {
                // Arrange
                const mailRule: MailRule = new MailRuleMock();
                mailRule.calendar = new CalendarMock();
                mailRule.calendar.createEvent = jest.fn();
                const mailThread: IMailThread = new MailThreadMock();
                mailThread.addLabel = jest.fn();
                const stockMailThread: StockMailThreads = {rule: mailRule, mailThreads: [mailThread]};
                user.stockMailThreads = [stockMailThread];

                // Act
                user.doRMinc();
                const actualStockMailThread: StockMailThreads = user.stockMailThreads[0];

                // Assert
                expect(actualStockMailThread.rule.calendar!.createEvent).toBeCalled();
                expect(actualStockMailThread.mailThreads[0].addLabel).toBeCalled();
            });
        });
        describe('Data: many stockMailThreads', () => {
            test('Assert: all called createEvent, addLabel', () => {
                // Arrange
                for (let i = 0; i < 3; i++) {
                    const mailRule: MailRule = new MailRuleMock();
                    mailRule.calendar = new CalendarMock();
                    mailRule.calendar.createEvent = jest.fn();
                    const mailThread: IMailThread = new MailThreadMock();
                    mailThread.addLabel = jest.fn();
                    user.stockMailThreads.push({rule: mailRule, mailThreads: [mailThread]});
                }

                // Act
                user.doRMinc();
                const actualStockMailThreads: Array<StockMailThreads> = user.stockMailThreads;

                // Assert
                actualStockMailThreads.forEach((actualStockMailThread: StockMailThreads) => {
                    expect(actualStockMailThread.rule.calendar!.createEvent).toBeCalled();
                    expect(actualStockMailThread.mailThreads[0].addLabel).toBeCalled();
                });
            });
        });
        describe('Data: single stockMailThreads (many mail threads)', () => {
            test('Assert: called createEvent, all addLabel', () => {
                // Arrange
                const mailRule: MailRule = new MailRuleMock();
                mailRule.calendar = new CalendarMock();
                mailRule.calendar.createEvent = jest.fn();
                const mailThreads: Array<IMailThread> = [];
                for (let i = 0; i < 3; i++) {
                    const mailThread: IMailThread = new MailThreadMock();
                    mailThread.addLabel = jest.fn();
                    mailThreads.push(mailThread);
                }
                user.stockMailThreads.push({rule: mailRule, mailThreads: mailThreads});

                // Act
                user.doRMinc();
                const actualStockMailThread: StockMailThreads = user.stockMailThreads[0];

                // Assert
                expect(actualStockMailThread.rule.calendar!.createEvent).toBeCalled();
                actualStockMailThread.mailThreads.forEach((mailThread: IMailThread) => {
                    expect(mailThread.addLabel).toBeCalled();
                });
            });
        });
    });
});