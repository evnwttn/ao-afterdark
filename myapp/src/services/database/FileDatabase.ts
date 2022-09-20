import { Database } from '.';
import { Session, SessionId } from '../../types';
import * as fs from "fs/promises";
import * as os from 'os';

export class FileDatabase extends Database {
    async createSession(session: Session, sessionId: SessionId): Promise<void> { 
        await fs.appendFile('sessions.json', JSON.stringify(session) + os.EOL);
    }

    async updateSession(session: Session): Promise<void> {
        await fs.writeFile('sessions.json', JSON.stringify(session) + os.EOL)
    }
 }

