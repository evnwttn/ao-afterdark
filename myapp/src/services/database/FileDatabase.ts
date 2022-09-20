import { Database } from '.';
import { Session } from '../../types';
import * as fs from "fs/promises";
import * as os from 'os';
import { v4 as uuidv4 } from 'uuid';



export class FileDatabase extends Database {
    async createSession(session: Session): Promise<void> { 
        await fs.appendFile('sessions.json', JSON.stringify(session, null, 2) + os.EOL);
    }

    async updateSession(session: Session): Promise<void> {
        await fs.writeFile('sessions.json', JSON.stringify(session, null, 2) + os.EOL)
    }
 }

