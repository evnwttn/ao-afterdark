import postgres from "postgres";
import { Database } from "./Database";
import { UserLoginData, Grid } from "../../types";
import { v4 as uuidv4 } from "uuid";

export class PostgresDatabase extends Database {
  sql: any;
  host: string;
  database: string;
  user: string;
  password: string;

  constructor(postgresOptions: {
    host: string;
    database: string;
    user: string;
    password: string;
  }) {
    super();

    this.host = postgresOptions.host;
    this.database = postgresOptions.database;
    this.user = postgresOptions.user;
    this.password = postgresOptions.password;
  }

  connect(): Promise<void> {
    this.sql = postgres({
      port: 5432,
      host: this.host,
      database: this.database,
      user: this.user,
      password: this.password,
    });

    return Promise.resolve();
  }

  retrieveUser(userId: string): Promise<Boolean> {
    console.log("retrieve user");
    throw new Error("Method not implemented.");
  }

  async signUpUser(user: Omit<UserLoginData, "id">): Promise<Boolean> {
    const id = uuidv4();
    const _user: UserLoginData = {
      ...user,
      id,
    };

    await this
      .sql`insert into users(email, password, user_id) values('${_user.email}', '${_user.password}', '${_user.id}'`;

    return true;
  }

  async logInUser(user: UserLoginData): Promise<string> {
    const _user = user;
    const login = await this
      .sql`select * from users where email = ${_user.email} and password = ${_user.password}`;

    console.log(login);

    return _user.email;
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
