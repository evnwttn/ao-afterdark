import { Database } from '.';
import { Session } from '../../types';
import * as fs from 'fs/promises';
import * as os from 'os';
import * as safeJsonStringify from 'safe-json-stringify';
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

        try {
            const fileData = await fs.readFile('sessions.json');
            const temp = JSON.parse(fileData.toString());
            console.log(temp)

            } catch (err) {
                console.log(err)
            }
    

        // try {
        // const fileData = await fs.readFile('sessions.json', { encoding: 'utf-8'});
        // fileData.split(/\r?\n/).forEach(session =>  {
        //     const sesh = JSON.parse(session);
        //     console.log(sesh);
        //   });
        // } catch (err) {
        //     console.log(err)
        // }

        return session

        // Read in sessions.json

        // Find the proper session with id

        // Overwrite it and save back to sessions.json

        // await fs.writeFile('sessions.json', JSON.stringify(session) + os.EOL)

    }
 }

