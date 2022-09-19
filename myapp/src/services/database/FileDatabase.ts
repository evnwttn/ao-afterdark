import { Database } from '.';
import { Session } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import * as fs from "fs/promises";
import * as os from 'os';

const sessionId = uuidv4();

export class FileDatabase extends Database {
    async createSession(session: Session): Promise<void> { 
        await fs.appendFile('sessions.json', JSON.stringify(session) + sessionId + os.EOL);
    }

    async updateSession(session: Session): Promise<void> {
        await fs.writeFile('sessions.json', JSON.stringify(session) + os.EOL)
    }
 }

