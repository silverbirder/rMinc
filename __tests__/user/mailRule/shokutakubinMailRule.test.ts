import * as fs from 'fs';
import * as path from 'path';
import ShokutakubinMailRule from "../../../src/user/mailRule/shokutakubinMailRule";
import MailRule, {DateRange} from "../../../src/user/mailRule/mailRule";

describe('Class: ShokutakubinMailRule', () => {
    const htmlMMDD: string = fs.readFileSync(path.resolve(__dirname, './html/shokutakubinMail.txt'), 'utf8');
    const htmlMMDDHHMM: string = fs.readFileSync(path.resolve(__dirname, './html/shokutakubinMail_hhmm_hhmm.txt'), 'utf8');
    describe('Method: extractLocation', () => {
        describe('Data: location(〒XXXXXXX XXXX)', () => {
            test('Assert: extracted location(〒XXXXXXX XXXX)', () => {
                // Arrange
                const mailRule: MailRule = new ShokutakubinMailRule();
                const expectedLocation: string = '〒XXXXXXX XXXX';

                // Act
                const actualLocation: string = mailRule.extractLocation(htmlMMDD);

                // Assert
                expect(actualLocation).toContain(expectedLocation);
            })
        })
    });
    describe('Method: extractDateRange', () => {
        describe('Data: 2020/05/20', () => {
            test('Assert: date range(2020/05/20 09:00 ~ 2020/05/20 12:00)', () => {
                // Arrange
                const mailRule: MailRule = new ShokutakubinMailRule();
                const expectedDateRange: DateRange = {
                    start: new Date(2020, 5 - 1, 20, 9, 0, 0),
                    end: new Date(2020, 5 - 1, 20, 12, 0, 0),
                };

                // Act
                const actualDateRange: DateRange = mailRule.extractDateRange(htmlMMDD, new Date('2020-01-01'));

                // Assert
                expect(actualDateRange).toStrictEqual(expectedDateRange);
            })
        });
        describe('Data: 2020/05/20 19:00 - 21:00', () => {
            test('Assert: date range(2020/05/20 19:00 ~ 2020/05/20 21:00)', () => {
                // Arrange
                const mailRule: MailRule = new ShokutakubinMailRule();
                const expectedDateRange: DateRange = {
                    start: new Date(2020, 5 - 1, 20, 19, 0, 0),
                    end: new Date(2020, 5 - 1, 20, 21, 0, 0),
                };

                // Act
                const actualDateRange: DateRange = mailRule.extractDateRange(htmlMMDDHHMM, new Date('2020-01-01'));

                // Assert
                expect(actualDateRange).toStrictEqual(expectedDateRange);
            })
        });
    });
    describe('Method: extractTitle', () => {
        describe('Data: "Title"', () => {
            test('Assert: Title is "Title"', () => {
                // Arrange
                const mailRule: MailRule = new ShokutakubinMailRule();
                const expectedTitle: string = 'Title';

                // Act
                const actualTitle: string = mailRule.extractTitle(htmlMMDD);

                // Assert
                expect(actualTitle).toBe(expectedTitle);
            });
        });
    });
});