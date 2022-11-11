import { Grid, UserLoginData } from "../../types";

export abstract class Database {
  constructor() {}

  abstract retrieveUser(userId: string): Promise<object>;
  abstract signUpUser(user: UserLoginData): Promise<UserLoginData>;
  abstract logInUser(user: UserLoginData): Promise<UserLoginData>;

  abstract retrieveSessions(user: string): Promise<Grid[]>;
  abstract createSession(session: Grid): Promise<Grid>;
  abstract updateSession(session: Grid): Promise<Grid>;
}
