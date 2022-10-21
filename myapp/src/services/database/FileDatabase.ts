import { Database } from ".";
import { Session, UserLoginData } from "../../types";
import * as fs from "fs/promises";
import * as os from "os";
import { v4 as uuidv4 } from "uuid";
import { json } from "stream/consumers";

export class FileDatabase extends Database {
  async signUpUser(user: Omit<UserLoginData, "id">): Promise<UserLoginData> {
    const id = uuidv4();
    const _user: UserLoginData = {
      ...user,
      id,
    };

    await fs.appendFile("users.json", JSON.stringify(_user) + os.EOL);

    return _user;
  }

  async logInUser(user: UserLoginData): Promise<UserLoginData> {
    const userDatabase = await fs.readFile("users.json", {
      encoding: "utf-8",
    });

    const userFiles = userDatabase.split(/\r?\n/);
    const index = userFiles.findIndex(
      (file) =>
        JSON.parse(file).email === user.email &&
        JSON.parse(file).password === user.password
    );
    if (index === -1) {
      return user;
    }

    const _user = JSON.parse(userFiles[index]);

    return _user;
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

  async retrieveSessions(user: string): Promise<Session[]> {
    const sessionsDatabase = await fs.readFile("sessions.json", {
      encoding: "utf-8",
    });

    const sessionFiles = sessionsDatabase.split(/\r?\n/);
    let userSessions: Session[] = [];

    try {
      sessionFiles.map((file) => {
        if (JSON.parse(file).user === user) {
          userSessions.push(JSON.parse(file));
        }
      });
    } catch (error) {
      //
    }

    let testSessions: Session[] = [];

    try {
      testSessions = sessionFiles
        .map((file) => JSON.parse(file))
        .filter((file) => file.users === user);
    } catch (error) {
      console.log(error);
    }

    console.log(testSessions);

    return userSessions;
  }
}
