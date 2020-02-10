import MailRule, {DateRange} from "../../../src/user/mailRule/mailRule";
import * as fs from 'fs';
import * as path from 'path';
import TohoCinemasMailRule from "../../../src/user/mailRule/tohoCinemasMailRule";

describe('', () => {
   describe('', () => {
      const tohoCinemasMailRules: MailRule = new TohoCinemasMailRule();
      const html: string = fs.readFileSync(path.resolve(__dirname, "./html/tohoCinemasMail.txt"), "utf8");
      const dateRange: DateRange = tohoCinemasMailRules.extractDateRange(html);
      console.log(dateRange);
      const location: string = tohoCinemasMailRules.extractLocation(html);
      console.log(location);
      const title: string = tohoCinemasMailRules.extractTitle(html);
      console.log(title);
   });
});