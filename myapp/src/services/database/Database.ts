import { Session, UserLoginData } from "../../types";

export abstract class Database {
  constructor() {}

  abstract createSession(session: Session): Promise<Session>;
  abstract updateSession(session: Session): Promise<Session>;
  abstract createNewUser(user: UserLoginData): Promise<UserLoginData>;
  abstract loginExistingUser(user: UserLoginData): Promise<UserLoginData>;
}
