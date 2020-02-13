import IMailThread from "../mailThread/iMailThread";
import IMailApp from "./iMailApp";
import ILabel from "../label/iLabel";
import LabelMock from "../label/labelMock";
import MailThreadMock from "../mailThread/mailThreadMock";

export default class MailAppMock implements IMailApp {
    mailThreads: Array<IMailThread> = [new MailThreadMock()];
    label: ILabel = new LabelMock();

    search(q: string): Array<IMailThread> {
        return this.mailThreads
    }

    getUserLabelByName(name: string): ILabel {
        return this.label
    }

    createLabel(name: string): ILabel {
        return this.label
    }
}