import { Session } from "../../types";

export abstract class Database {
    constructor() {
    }

    abstract updateSession(session: Omit<Session, 'id'>): Promise<void>;

}