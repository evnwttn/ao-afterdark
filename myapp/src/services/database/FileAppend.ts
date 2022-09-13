import { Database } from '.';
import { Session } from '../../types';
import * as fs from "fs/promises";

export class FileAppend extends Database {
    async modifySession(session: Omit<Session, 'id'>): Promise<void> { 
        await fs.appendFile('sessions.json', JSON.stringify(session));
    }
}

