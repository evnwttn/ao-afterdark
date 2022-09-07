import { Session } from "../../types";

export abstract class Database {
    constructor() {
    }

    abstract createNewSession(session: Omit<Session, 'id'>): Promise<void>;

}