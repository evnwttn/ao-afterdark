import { Session, UserLoginData } from "../../types";

export abstract class Database {
  constructor() {}

  abstract retrieveUser(id: string): Promise<UserLoginData>;
  abstract signUpUser(user: UserLoginData): Promise<UserLoginData>;
  abstract logInUser(user: UserLoginData): Promise<UserLoginData>;

  abstract retrieveSessions(user: string): Promise<Session[]>;
  abstract createSession(session: Session): Promise<Session>;
  abstract updateSession(session: Session): Promise<Session>;
}
