import IMailThread from "../mailThread/iMailThread";
import IMailApp from "./iMailApp";
import ILabel from "../label/iLabel";

export default class MailAppImpl implements IMailApp {
    search(q: string): Array<IMailThread> {
        return GmailApp.search(q)
    }

    getUserLabelByName(name: string): ILabel {
        return GmailApp.getUserLabelByName(name)
    }

    createLabel(name: string): ILabel {
        return GmailApp.createLabel(name)
    }
}