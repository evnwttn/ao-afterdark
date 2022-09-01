import { Session } from "../../types";

export abstract class Database {
    constructor() {
    }

    abstract createNewSession(session: Session): Promise<void>;

}