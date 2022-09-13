import { Database } from './Database';
import { Session } from '../../types';
import * as fs from "fs/promises";

export class FileDatabase extends Database {
    async modifySession(session: Omit<Session, 'id'>): Promise<void> { 
        await fs.writeFile('sessions.json', JSON.stringify(session));
    }
}