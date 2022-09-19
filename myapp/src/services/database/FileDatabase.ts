import { Database } from '.';
import { Session } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import * as fs from "fs/promises";
import * as os from 'os';

const sessionId = {id: uuidv4()};

export class FileDatabase extends Database {
    async createSession(session: Session): Promise<void> { 
        await fs.appendFile('sessions.json', JSON.stringify(session) + os.EOL);
    }

    async updateSession(session: Session): Promise<void> {
        await fs.writeFile('sessions.json', JSON.stringify(session) + os.EOL)
    }
 }

