import { Database } from './database';
import { Session } from '../types';
import * as fs from "fs/promises";

export class FileAppend extends Database {
    async createNewSession(session: Omit<Session, 'id'>): Promise<void> { 
        await fs.writeFile('sessions.json', JSON.stringify(session));
    }
}