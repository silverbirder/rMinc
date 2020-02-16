import UserImpl from "./user/userImpl";
import AmazonMailRule from "./user/mailRule/amazonMailRule";
import TohoCinemasMailRule from "./user/mailRule/tohoCinemasMailRule";
import ShokutakubinMailRule from "./user/mailRule/shokutakubinMailRule";
import MailRule from "./user/mailRule/mailRule";

declare const global: {
    User: any
    MailRule: any
    AmazonMailRule: any
    TohoCinemasMailRule: any
    ShokutakubinMailRule: any
};

global.User = UserImpl;
global.MailRule = MailRule;
global.AmazonMailRule = AmazonMailRule;
global.TohoCinemasMailRule = TohoCinemasMailRule;
global.ShokutakubinMailRule = ShokutakubinMailRule;

export {
    UserImpl as User,
    MailRule,
    AmazonMailRule,
    TohoCinemasMailRule,
    ShokutakubinMailRule,
}