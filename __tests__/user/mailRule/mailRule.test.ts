import MailRule from "../../../src/user/mailRule/mailRule";
import AmazonMailRule from "../../../src/user/mailRule/amazonMailRule";

describe('Class: MailRule', () => {
    describe('Method: constructor', () => {
        describe('Args: before: Date = 2020/02/01, after: Date = 2020/02/15', () => {
            test('Assert: attribute: before: string = 2020/02/01, after: string = 2020/02/15', () => {
                // Arrange
                const expectedBefore: string = '2020/02/01';
                const expectedAfter: string = '2020/02/15';

                // Act
                const mailRule: MailRule = new AmazonMailRule(new Date(expectedBefore), new Date(expectedAfter));
                const actualBefore: string = mailRule.before;
                const actualAfter: string = mailRule.after;

                // Assert
                expect(actualBefore).toBe(expectedBefore);
                expect(actualAfter).toBe(expectedAfter);
            });
        });
    });
    describe('Method: buildQuery', () => {
        describe('Args: undefined', () => {
            test('Assert: "label, after, before, filteringKeyword" in query', () => {
                // Arrange
                const mailRule: MailRule = new AmazonMailRule();
                const expectedKeysInQuery: Array<string> = ['label', 'after', 'before', mailRule.filteringKeyword];

                // Act
                const actualQuery: string = mailRule.buildQuery();

                // Assert
                expectedKeysInQuery.forEach((expectedKey: string) => {
                    expect(actualQuery).toContain(expectedKey);
                })
            });
        });
    });
    describe('Method: buildLabel', () => {
        describe('Args: undefined', () => {
            test('Assert: "confirmed" in label', () => {
                // Arrange
                const mailRule: MailRule = new AmazonMailRule();
                const expectedKeyInLabel: string = 'confirmed';

                // Act
                const actualLabel: string = mailRule.buildLabel();

                // Assert
                expect(actualLabel).toContain(expectedKeyInLabel);
            });
        });
    });
});