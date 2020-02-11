import UserImpl from "./user/userImpl";
import AmazonMailRule from "./user/mailRule/amazonMailRule";
import TohoCinemasMailRule from "./user/mailRule/tohoCinemasMailRule";
import ShokutakubinMailRule from "./user/mailRule/shokutakubinMailRule";

declare const global: {
    User: any
    AmazonMailRule: any
    TohoCinemasMailRule: any
    ShokutakubinMailRule: any
};

global.User = UserImpl;
global.AmazonMailRule = AmazonMailRule;
global.TohoCinemasMailRule = TohoCinemasMailRule;
global.ShokutakubinMailRule = ShokutakubinMailRule;

export {
    UserImpl as User,
    AmazonMailRule,
    TohoCinemasMailRule,
    ShokutakubinMailRule,
}