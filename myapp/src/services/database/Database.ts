import { Grid, UserLoginData } from "../../types";

export abstract class Database {
  constructor() {}

  abstract connect(): Promise<void>;
  abstract retrieveUser(userId: string): Promise<Boolean>;
  abstract signUpUser(user: UserLoginData): Promise<Boolean>;
  abstract logInUser(user: UserLoginData): Promise<string>;
  abstract retrieveGrids(user: string): Promise<Grid[]>;
  abstract createGrid(grid: Omit<Grid, "id">): Promise<string>;
  abstract updateGrid(grid: Omit<Grid, "user">): Promise<Omit<Grid, "user">>;
}
