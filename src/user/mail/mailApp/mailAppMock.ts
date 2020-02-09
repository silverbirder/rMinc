import IMailThread from "../mailThread/iMailThread";
import IMailApp from "./iMailApp";
import ILabel from "../label/iLabel";

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