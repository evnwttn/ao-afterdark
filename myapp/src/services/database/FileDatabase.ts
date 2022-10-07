import { Database } from ".";
import { Session } from "../../types";
import * as fs from "fs/promises";
import * as os from "os";
import { v4 as uuidv4 } from "uuid";

export class FileDatabase extends Database {
  async createSession(session: Omit<Session, "id">): Promise<Session> {
    const id = uuidv4();
    const _session: Session = {
      ...session,
      id,
    };
    await fs.appendFile("sessions.json", JSON.stringify(_session) + os.EOL);

    return _session;
  }

  async updateSession(session: Session): Promise<Session> {
    const sessionsDatabase = await fs.readFile("sessions.json", {
      encoding: "utf-8",
    });

    const arr = sessionsDatabase.split(/\r?\n/);
    const idx = arr.findIndex((item) => JSON.parse(item).id === session.id);
    if (idx === -1) {
      return session;
    }

    arr[idx] = JSON.stringify(session);
    await fs.writeFile("sessions.json", arr.join("\n"));

    return session;
  }
}
