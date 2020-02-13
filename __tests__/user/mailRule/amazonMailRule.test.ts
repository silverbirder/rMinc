import MailRule, {DateRange} from "../../../src/user/mailRule/mailRule";
import AmazonMailRule from "../../../src/user/mailRule/amazonMailRule";
import * as fs from 'fs';
import * as path from 'path';

describe('Class: AmazonMailRule', () => {
    const htmlMMDD: string = fs.readFileSync(path.resolve(__dirname, './html/amazonMail_mmdd.html'), 'utf8');
    const htmlMMDDHHMM: string = fs.readFileSync(path.resolve(__dirname, './html/amazonMail_mmdd_hhmm-hhmm.html'), 'utf8');
    describe('Method: extractLocation', () => {
        describe('Data: location(XXX-XXXX  XXXX  XXXX  XXXX)', () => {
            test('Assert: extracted location(XXX-XXXX  XXXX  XXXX  XXXX)', () => {
                // Arrange
                const mailRule: MailRule = new AmazonMailRule();
                const expectedLocation: string = 'XXX-XXXX  XXXX  XXXX  XXXX';

                // Act
                const actualLocation: string = mailRule.extractLocation(htmlMMDD);

                // Assert
                expect(actualLocation).toBe(expectedLocation);
            })
        });
    });
    describe('Method: extractDateRange', () => {
        describe('Data: 2020/05/20', () => {
            test('Assert: date range(2020/05/20 00:00 ~ 2020/05/20 00:00)', () => {
                // Arrange
                const mailRule: MailRule = new AmazonMailRule();
                const expectedDateRange: DateRange = {
                    start: new Date(2020, 5 - 1, 20, 0, 0, 0),
                    end: new Date(2020, 5 - 1, 20, 0, 0, 0),
                };

                // Act
                const actualDateRange: DateRange = mailRule.extractDateRange(htmlMMDD, new Date('2020-01-01'));

                // Assert
                expect(actualDateRange).toStrictEqual(expectedDateRange);
            })
        });
        describe('Data: 2020/05/20 08:00 - 12:00', () => {
            test('Assert: date range(2020/05/20 08:00 ~ 2020/05/20 12:00)', () => {
                // Arrange
                const mailRule: MailRule = new AmazonMailRule();
                const expectedDateRange: DateRange = {
                    start: new Date(2020, 5 - 1, 20, 8, 0, 0),
                    end: new Date(2020, 5 - 1, 20, 12, 0, 0),
                };

                // Act
                const actualDateRange: DateRange = mailRule.extractDateRange(htmlMMDDHHMM, new Date('2020-01-01'));

                // Assert
                expect(actualDateRange).toStrictEqual(expectedDateRange);
            })
        });
    });
    describe('Method: extractTitle', () => {
        test('Assert: Title is ""', () => {
            // Arrange
            const mailRule: MailRule = new AmazonMailRule();
            const expectedTitle: string = '';

            // Act
            const actualTitle: string = mailRule.extractTitle(htmlMMDD);

            // Assert
            expect(actualTitle).toBe(expectedTitle);
        });
    });
});