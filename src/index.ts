import UserImpl from "./user/userImpl";
import AmazonMailRule from "./user/mailRule/amazonMailRule";
import TohoCinemasMailRule from "./user/mailRule/tohoCinemasMailRule";

declare const global: {
    User: any
    AmazonMailRule: any
    TohoCinemasMailRule: any
};

global.User = UserImpl;
global.AmazonMailRule = AmazonMailRule;
global.TohoCinemasMailRule = TohoCinemasMailRule;

export {
    UserImpl as User,
    AmazonMailRule,
    TohoCinemasMailRule
}