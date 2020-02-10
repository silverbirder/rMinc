import MailRule, {DateRange} from "../../../src/user/mailRule/mailRule";
import AmazonMailRule from "../../../src/user/mailRule/amazonMailRule";
import * as fs from 'fs';
import * as path from 'path';

describe('', () => {
   describe('', () => {
      const amazonMailRules: MailRule = new AmazonMailRule();
      const html: string = fs.readFileSync(path.resolve(__dirname, "./html/amazonMail_mmdd_hhmm-hhmm.html"), "utf8");
      const dateRange: DateRange = amazonMailRules.extractDateRange(html, new Date(2020, 2, 14));
      console.log(dateRange);
      const location: string = amazonMailRules.extractLocation(html);
      console.log(location);
   });
});