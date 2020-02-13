import MailRule from "../../../src/user/mailRule/mailRule";
import AmazonMailRule from "../../../src/user/mailRule/amazonMailRule";
import * as fs from 'fs';
import * as path from 'path';

describe('Class: AmazonMailRule', () => {
    describe('Method: extractLocation', () => {
        describe('Args: Undefined', () => {
            it('Assert: TBD', () => {
                // Arrange
                const html: string = fs.readFileSync(path.resolve(__dirname, './html/amazonMail_mmdd.html'), 'utf8');
                const mailRule: MailRule = new AmazonMailRule();
                const expectedLocation: string = 'XXXX';

                // Act
                const actualLocation: string = mailRule.extractLocation(html);

                // Assert
                expect(expectedLocation).toContain(actualLocation);
            })
        });
    });
});