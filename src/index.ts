import UserImpl from "./user/userImpl";
import AmazonMailRule from "./user/mailRule/AmazonMailRule";

declare const global: {
    User: any
    AmazonMailRule: any
};

global.User = UserImpl;
global.AmazonMailRule = AmazonMailRule;

export {
    UserImpl as User,
    AmazonMailRule
}