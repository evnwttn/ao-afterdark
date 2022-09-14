import { Database } from '.';
import { Session } from '../../types';
import * as fs from "fs/promises";
import os from 'os';

export class FileDatabase extends Database {
    async updateSession(session: Omit<Session, 'id'>): Promise<void> { 
        await fs.appendFile('sessions.json', JSON.stringify(session) + os.EOL);
    }
}

