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

  async retrieveUser(userId: string): Promise<Boolean> {
    const returnUser = await this
      .sql`select * from users where user_id = ${userId}`;

    if (!returnUser) {
      return false;
    }

    return true;
  }

  async signUpUser(user: Omit<UserLoginData, "id">): Promise<Boolean> {
    const id = uuidv4();
    const _user: UserLoginData = {
      ...user,
      id,
    };

    await this
      .sql`insert into users(email, password, user_id) values(${_user.email}, ${_user.password}, ${_user.id}`;

    return true;
  }

  async logInUser(user: UserLoginData): Promise<string> {
    const login = await this
      .sql`select * from users where email = ${user.email} and password = ${user.password}`;

    return login[0].user_id;
  }

  async retrieveGrids(user: string): Promise<Grid[]> {
    const grids = await this.sql`select * from grids where user_id = ${user}`;

    return grids;
  }

  async createGrid(grid: Grid): Promise<string> {
    const id = uuidv4();
    console.log(grid);

    // await this
    //   .sql`insert into grids(parameters, user_id, author, session_title, tracks, grid_id) values('{"title", "vocals"}', '1234', 'evan', 'lalala', '{"title":"1","parameters":[{"parameter":"Vocals","colour":"#2D2D2D","comment":""}]}', '123456')`;

    return id;
  }
  updateGrid(session: Grid): Promise<Grid> {
    throw new Error("Method not implemented.");
  }
}
