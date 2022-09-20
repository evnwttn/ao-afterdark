import { Database } from '.';
import { Session, SessionId } from '../../types';
import * as fs from "fs/promises";
import * as os from 'os';
import { v4 as uuidv4 } from 'uuid';


export class FileDatabase extends Database {
    async createSession(session: Session): Promise<void> { 
        await session.id.push(uuidv4());
        await fs.appendFile('sessions.json', JSON.stringify(session) + os.EOL);
    }

    async updateSession(session: Session): Promise<void> {
        await fs.writeFile('sessions.json', JSON.stringify(session) + os.EOL)
    }
 }

