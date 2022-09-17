import { Database } from '.';
import { Session } from '../../types';
import * as fs from "fs/promises";
import * as os from 'os';

export class FileDatabase extends Database {
    async updateSession(session: Session): Promise<void> { 
        await fs.appendFile('sessions.json', JSON.stringify(session) + os.EOL);
    }
}

