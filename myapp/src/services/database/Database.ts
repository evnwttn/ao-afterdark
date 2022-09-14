import { Session } from "../../types";

export abstract class Database {
    constructor() {
    }

    abstract updateSession(session: Session): Promise<void>;

}