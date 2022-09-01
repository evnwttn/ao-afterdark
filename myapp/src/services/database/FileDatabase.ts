import { Database } from './Database';
import { Session } from '../../types';
import * as fs from "fs/promises";

export class FileDatabase extends Database {
    async createNewSession(session: Session): Promise<void> { 
        await fs.writeFile('sessions.json', JSON.stringify(session));
    }
}