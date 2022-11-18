import postgres from "postgres";
import { Database } from "./Database";
import { UserLoginData, Grid } from "../../types";

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

  signUpUser(user: UserLoginData): Promise<Boolean> {
    console.log("signup user");
    throw new Error("Method not implemented.");
  }

  async logInUser(user: UserLoginData): Promise<string> {
    const _user = user;
    const login = await this
      .sql`select * from users where email = ${_user.email} and password = ${_user.password}`;

    return _user.id;
  }

  retrieveGrids(user: string): Promise<Grid[]> {
    console.log("retrieve grids");
    throw new Error("Method not implemented.");
  }
  createGrid(grid: Grid): Promise<string> {
    console.log("create grids");
    throw new Error("Method not implemented.");
  }
  updateGrid(session: Grid): Promise<Grid> {
    console.log("update grids");
    throw new Error("Method not implemented.");
  }
}
