import { Session } from "../../types";

export abstract class Database {
    constructor() {
    }

    abstract modifySession(session: Omit<Session, 'id'>): Promise<void>;

}