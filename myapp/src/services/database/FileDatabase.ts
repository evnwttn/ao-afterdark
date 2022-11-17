import { Database } from ".";
import { Grid, UserLoginData } from "../../types";
import * as fs from "fs/promises";
import * as os from "os";
import { v4 as uuidv4 } from "uuid";

export class FileDatabase extends Database {
  connect(): Promise<void> {
    return Promise.resolve();
  }

  async retrieveUser(userId: string): Promise<Boolean> {
    const userDatabase = await fs.readFile("userStore.json", {
      encoding: "utf-8",
    });

    const userFiles = userDatabase.split(/\r?\n/);
    const index = userFiles.findIndex((file) => JSON.parse(file).id === userId);
    if (index === -1) {
      return false;
    }

    return true;
  }

  async signUpUser(user: Omit<UserLoginData, "id">): Promise<Boolean> {
    const id = uuidv4();
    const _user: UserLoginData = {
      ...user,
      id,
    };

    await fs.appendFile("userStore.json", JSON.stringify(_user) + os.EOL);

    return true;
  }

  async logInUser(user: UserLoginData): Promise<string> {
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
      return "";
    }

    const _user = JSON.parse(userFiles[index]);

    return _user.id;
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

  async createGrid(grid: Omit<Grid, "id">): Promise<string> {
    const id = uuidv4();
    const _grid: Grid = {
      ...grid,
      id,
    };

    await fs.appendFile("gridStore.json", os.EOL + JSON.stringify(_grid));

    return id;
  }

  async updateGrid(grid: Grid): Promise<Grid> {
    const sessionsDatabase = await fs.readFile("gridStore.json", {
      encoding: "utf-8",
    });

    const sessionFiles = sessionsDatabase.split(/\r?\n/);
    const index = sessionFiles.findIndex(
      (file) => JSON.parse(file).id === grid.id
    );
    if (index === -1) {
      return grid;
    }

    sessionFiles[index] = JSON.stringify(grid);
    await fs.writeFile("gridStore.json", sessionFiles.join("\n") + os.EOL);

    return grid;
  }
}
