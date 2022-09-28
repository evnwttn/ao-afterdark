import { Session } from "../../types";


export abstract class Database {
    constructor() {
    }

    abstract createSession(session: Session): Promise<Session>;
    abstract updateSession(session: Session): Promise<Session>;

}