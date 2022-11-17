import postgres from "postgres";
import { Database } from ".";
import { UserLoginData, Grid } from "../../types";

export class PostgresDatabase extends Database {
  sql: any;

  // constructor
  // this.host...
  // use .env

  connect(): Promise<void> {
    this.sql = postgres({
      host: "xxxxxxx",
      database: "xxxxx",
      port: 42069,
      user: "xxxxxxxx",
      password: "xxxxxxxxxxxxxxxxxx",
    });

    return Promise.resolve();
  }
  retrieveUser(userId: string): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  signUpUser(user: UserLoginData): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  logInUser(user: UserLoginData): Promise<string> {
    throw new Error("Method not implemented.");
  }
  retrieveGrids(user: string): Promise<Grid[]> {
    throw new Error("Method not implemented.");
  }
  createGrid(grid: Grid): Promise<string> {
    throw new Error("Method not implemented.");
  }
  updateGrid(session: Grid): Promise<Grid> {
    throw new Error("Method not implemented.");
  }
}
