import { Database } from '.';
import { Session } from '../../types';
import * as fs from "fs/promises";
import * as os from 'os';
import { v4 as uuidv4 } from 'uuid';


export class FileDatabase extends Database {
   
    async createSession(session: Omit<Session, 'id'>): Promise<Session> { 
        const id = uuidv4();
        const _session: Session = {
        ...session,
        id
    }
        await fs.appendFile('sessions.json', JSON.stringify(_session) + os.EOL);
        
        return _session
    }

    async updateSession(session: Session): Promise<Session> {
        const fileData = await fs.readFile('sessions.json');
        console.log(fileData)

        // Read in sessions.json

        // Find the proper session with id

        // Overwrite it and save back to sessions.json
        // await fs.writeFile('sessions.json', JSON.stringify(session) + os.EOL)

        return session
    }
 }

