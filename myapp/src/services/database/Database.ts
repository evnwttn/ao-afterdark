import { Session, SessionId } from "../../types";


export abstract class Database {
    constructor() {
    }

    abstract createSession(session: Session, sessionId: SessionId): Promise<void>;
    abstract updateSession(session: Session): Promise<void>;

}