import IMailThread from "./iMailThread";
import IMailApp from "./iMailApp";
import ILabel from "./iLabel";

export default class MailAppMock implements IMailApp {
    search(q: string): Array<IMailThread> {
        return []
    }

    getUserLabelByName(name: string): ILabel {
        return {}
    }

    createLabel(name: string): void {
    }
}