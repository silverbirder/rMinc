import IMailThread from "../mailThread/iMailThread";
import ILabel from "../label/iLabel";

export default interface IMailApp {
    search(q: string): Array<IMailThread>

    getUserLabelByName(name: string): ILabel

    createLabel(name: string): void
}