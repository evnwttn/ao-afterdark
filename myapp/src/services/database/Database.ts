import { Grid, UserLoginData } from "../../types";

export abstract class Database {
  constructor() {}

  abstract retrieveUser(userId: string): Promise<object>;

  abstract signUpUser(user: UserLoginData): Promise<UserLoginData>;
  abstract logInUser(user: UserLoginData): Promise<UserLoginData>;

  abstract retrieveGrids(user: string): Promise<Grid[]>;
  abstract createGrid(session: Grid): Promise<Grid>;
  abstract updateGrid(session: Grid): Promise<Grid>;
}
