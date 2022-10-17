import { Session, UserLoginData } from "../../types";

export abstract class Database {
  constructor() {}

  abstract signUpUser(user: UserLoginData): Promise<UserLoginData>;
  abstract logInUser(user: UserLoginData): Promise<UserLoginData>;

  abstract createSession(session: Session): Promise<Session>;
  abstract updateSession(session: Session): Promise<Session>;
  abstract retrieveSessions(user: string): Promise<Session[]>;
}
