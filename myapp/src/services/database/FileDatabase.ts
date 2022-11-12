import { Database } from ".";
import { Grid, UserLoginData } from "../../types";
import * as fs from "fs/promises";
import * as os from "os";
import { v4 as uuidv4 } from "uuid";

export class FileDatabase extends Database {
  async retrieveUser(userId: string): Promise<object> {
    const userDatabase = await fs.readFile("userStore.json", {
      encoding: "utf-8",
    });

    const userFiles = userDatabase.split(/\r?\n/);
    const index = userFiles.findIndex((file) => JSON.parse(file).id === userId);
    if (index === -1) {
      return {};
    }

    const userData = JSON.parse(userFiles[index]);

    return userData;
  }

  async signUpUser(user: Omit<UserLoginData, "id">): Promise<UserLoginData> {
    const id = uuidv4();
    const _user: UserLoginData = {
      ...user,
      id,
    };

    await fs.appendFile("userStore.json", JSON.stringify(_user) + os.EOL);

    return _user;
  }

  async logInUser(user: UserLoginData): Promise<UserLoginData> {
    const userDatabase = await fs.readFile("userStore.json", {
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

  async retrieveGrids(user: string): Promise<Grid[]> {
    const sessionsDatabase = await fs.readFile("gridStore.json", {
      encoding: "utf-8",
    });

    const sessionFiles = sessionsDatabase.split(/\r?\n/);

    const userSessions = sessionFiles
      .map((file) => JSON.parse(file))
      .filter((file) => file.user === user);

    return userSessions;
  }

  async createGrid(session: Omit<Grid, "id">): Promise<Grid> {
    const id = uuidv4();
    const _session: Grid = {
      ...session,
      id,
    };
    await fs.appendFile("gridStore.json", os.EOL + JSON.stringify(_session));

    return _session;
  }

  async updateGrid(session: Grid): Promise<Grid> {
    const sessionsDatabase = await fs.readFile("gridStore.json", {
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
    await fs.writeFile("gridStore.json", sessionFiles.join("\n") + os.EOL);

    return session;
  }
}
