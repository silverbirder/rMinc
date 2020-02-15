import IUser, {StockMailThreads} from "../../src/user/iUser";
import UserImpl from "../../src/user/userImpl";
import MailAppMock from "../../src/user/mail/mailApp/mailAppMock";
import CalendarAppMock from "../../src/user/calendarApp/calendarAppMock";
import MailRuleMock from "../../src/user/mailRule/mailRuleMock";
import MailRule from "../../src/user/mailRule/mailRule";
import MailThreadMock from "../../src/user/mail/mailThread/mailThreadMock";

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
        describe('Data: TODO', () => {
            test('Assert: TODO', () => {
                // Arrange
                user.stockMailThreads = [
                    {
                        rule: new MailRuleMock(),
                        mailThreads: [
                            new MailThreadMock(),
                        ],
                    },
                ];

                // Act
                // user.doRMinc();

                // Assert
            });
        });
    });
});