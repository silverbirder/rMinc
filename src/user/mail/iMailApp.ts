import IMailThread from "./iMailThread";
import ILabel from "./iLabel";

export default interface IMailApp {
    search(q: string): Array<IMailThread>

    getUserLabelByName(name: string): ILabel

    createLabel(name: string): void
}