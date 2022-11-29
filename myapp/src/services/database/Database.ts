import { Grid, UserData } from "../../types";

export abstract class Database {
  constructor() {}

  abstract connect(): Promise<void>;
  abstract retrieveUser(userId: string): Promise<Boolean>;
  abstract signUpUser(user: UserData): Promise<Boolean>;
  abstract logInUser(user: UserData): Promise<string>;
  abstract retrieveGrids(user: string): Promise<Grid[]>;
  abstract createGrid(grid: any): Promise<string>;
  abstract updateGrid(session: any): Promise<any>;
}
