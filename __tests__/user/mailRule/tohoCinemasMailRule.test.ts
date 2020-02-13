import * as fs from 'fs';
import * as path from 'path';
import MailRule, {DateRange} from "../../../src/user/mailRule/mailRule";
import TohoCinemasMailRule from "../../../src/user/mailRule/tohoCinemasMailRule";

describe('Class: ShokutakubinMailRule', () => {
    const htmlMMDDHHMM: string = fs.readFileSync(path.resolve(__dirname, './html/tohoCinemasMail.txt'), 'utf8');
    describe('Method: extractLocation', () => {
        describe('Data: location(XXXX)', () => {
            test('Assert: extracted location(XXXX)', () => {
                // Arrange
                const mailRule: MailRule = new TohoCinemasMailRule();
                const expectedLocation: string = 'XXXX';

                // Act
                const actualLocation: string = mailRule.extractLocation(htmlMMDDHHMM);

                // Assert
                expect(actualLocation).toContain(expectedLocation);
            })
        })
    });
    describe('Method: extractDateRange', () => {
        describe('Data: 2020/05/20 19:00', () => {
            test('Assert: date range(2020/05/20 19:00 ~ 2020/05/20 19:00)', () => {
                // Arrange
                const mailRule: MailRule = new TohoCinemasMailRule();
                const expectedDateRange: DateRange = {
                    start: new Date(2020, 5 - 1, 20, 19, 0, 0),
                    end: new Date(2020, 5 - 1, 20, 19, 0, 0),
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
                const mailRule: MailRule = new TohoCinemasMailRule();
                const expectedTitle: string = 'Title';

                // Act
                const actualTitle: string = mailRule.extractTitle(htmlMMDDHHMM);

                // Assert
                expect(actualTitle).toBe(expectedTitle);
            });
        });
    });
});