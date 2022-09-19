import { Session, SessionId } from "../../types";
import { v4 as uuidv4 } from 'uuid';


export abstract class Database {
    constructor() {
        const sessionId = {id: uuidv4()};
    }

    abstract createSession(session: Session, sessionId: SessionId): Promise<void>;
    abstract updateSession(session: Session, sessionId: SessionId): Promise<void>;

}