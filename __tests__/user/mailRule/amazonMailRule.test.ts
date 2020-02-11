import MailRule, {DateRange} from "../../../src/user/mailRule/mailRule";
import * as fs from 'fs';
import * as path from 'path';
import shokutakubinMailRule from "../../../src/user/mailRule/shokutakubinMailRule";

describe('', () => {
   describe('', () => {
      const rules: MailRule = new shokutakubinMailRule();
      const html: string = fs.readFileSync(path.resolve(__dirname, "./html/shokutakubinMail_hhmm_hhmm.txt"), "utf8");
      const dateRange: DateRange = rules.extractDateRange(html);
      console.log(dateRange);
      const location: string = rules.extractLocation(html);
      console.log(location);
      const title: string = rules.extractTitle(html);
      console.log(title);
   });
});