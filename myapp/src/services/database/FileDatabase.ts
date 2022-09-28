import { Database } from '.';
import { Session } from '../../types';
import * as fs from 'fs/promises';
import * as os from 'os';
import { v4 as uuidv4 } from 'uuid';


export class FileDatabase extends Database {
   
    async createSession(session: Omit<Session, 'id'>): Promise<Session> { 
        const id = uuidv4();
        const _session: Session = {
        ...session,
        id,
    }
        await fs.appendFile('sessions.json', JSON.stringify(_session) + os.EOL);
        
        return _session
    }

    async updateSession(session: Session): Promise<Session> {

        const sessionsDatabase= await fs.readFile('sessions.json', { encoding: 'utf-8' });
        sessionsDatabase.split(/\r?\n/).forEach((sessionFile: string, index: any) => {
        const file = JSON.parse(sessionFile)
        if (file.id === session.id) {
            console.log(file)
        }
        })

        return session

        // Overwrite it and save back to sessions.json

    }
 }


 
        // const fileData = await fs.readFile('sessions.json', { encoding: 'utf-8'});
        // fileData.split(/\r?\n/).forEach((sessionFile: string, index: any) =>  {
        //     const sessionFileObject = JSON.parse(sessionFile)
        //     if (sessionFileObject.id === session.id) {
        //         // const updatedSession = fileData.replace(sessionFile, JSON.stringify(session))
        //         console.log(sessionFile[index])
        //     }
        //   });
