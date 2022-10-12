import { Database } from ".";
import { Session, UserLoginData } from "../../types";
import * as fs from "fs/promises";
import * as os from "os";
import { v4 as uuidv4 } from "uuid";

export class FileDatabase extends Database {
  async signUpUser(user: UserLoginData): Promise<UserLoginData> {
    await fs.appendFile("users.json", JSON.stringify(user) + os.EOL);

    return user;
  }

  async logInUser(user: UserLoginData): Promise<UserLoginData> {
    const userDatabase = await fs.readFile("users.json", {
      encoding: "utf-8",
    });
    const userFiles = userDatabase.split(/\r?\n/);

    console.log(user);
    console.log(JSON.parse(userFiles[0]));

    // const index = userFiles.findIndex((file) => JSON.parse(file) === user);
    // if (index === -1) {
    //   console.log("user does not exist");
    //   return user;
    // }

    // console.log(userFiles[index]);

    return user;
  }

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

    const sessionFiles = sessionsDatabase.split(/\r?\n/);
    const index = sessionFiles.findIndex(
      (file) => JSON.parse(file).id === session.id
    );
    if (index === -1) {
      return session;
    }

    sessionFiles[index] = JSON.stringify(session);
    await fs.writeFile("sessions.json", sessionFiles.join("\n"));

    return session;
  }
}
