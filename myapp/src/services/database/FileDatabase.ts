import { Database } from '.';
import { Session } from '../../types';
import * as fs from 'fs/promises';
import * as os from 'os';
import { v4 as uuidv4 } from 'uuid';


export class FileDatabase extends Database {
   
    async createSession(session: Omit<Session, 'id'>): Promise<Session> { 
        const id = 'hello';
        const _session: Session = {
        ...session,
        id
    }
        await fs.appendFile('sessions.json', JSON.stringify(_session) + os.EOL);
        
        return _session
    }

    async updateSession(session: Session): Promise<Session> {

        const fileData = await fs.readFile('sessions.json', { encoding: 'utf-8'});
        fileData.split(/\r?\n/).forEach((sessionFile: string, index: any) =>  {
            const sessionFileObject = JSON.parse(`${sessionFile}`)
            if (sessionFileObject.id === session.id) {
                const updatedSession = fileData.replace(JSON.stringify(sessionFileObject), JSON.stringify(session))
                console.log(updatedSession)
            }
          });



        // const fileData = await fs.readFile('sessions.json', { encoding: 'utf-8'});
        // fileData.split(/\r?\n/).forEach((sessionFile: string, index: any) =>  {
        //     const sessionFileObject = JSON.parse(`${sessionFile}`)
        //     if (sessionFileObject.id === session.id) {
        //         console.log(index)
        //     }
        //   });


        return session


        // Overwrite it and save back to sessions.json

        // await fs.writeFile('sessions.json', JSON.stringify(session) + os.EOL)

    }
 }

