import IMailThread from "./iMailThread";
import IMailApp from "./iMailApp";
import ILabel from "./iLabel";

export default class MailAppImpl implements IMailApp {
    search(q: string): Array<IMailThread> {
        return GmailApp.search(q)
    }

    getUserLabelByName(name: string): ILabel {
        return GmailApp.getUserLabelByName(name)
    }

    createLabel(name: string): void {
        GmailApp.createLabel(name);
    }
}