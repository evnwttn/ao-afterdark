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

    const newUser = await this
      .sql`insert into users(email, password, user_id) values(${_user.email}, ${_user.password}, ${_user.id})`;

    if (!newUser) {
      return false;
    }

    return true;
  }

  async logInUser(user: UserLoginData): Promise<string> {
    const login = await this
      .sql`select * from users where email = ${user.email} and password = ${user.password}`;

    return login[0].user_id;
  }

  async retrieveGrids(user: string): Promise<Grid[]> {
    const grids = await this
      .sql`select parameters, author, session_title, tracks, grid_id from grids where user_id = ${user}`;

    return grids;
  }

  async createGrid(grid: any): Promise<string> {
    const id = uuidv4();
    const _grid: any = {
      ...grid,
      id,
    };

    console.log(_grid);

    const test = await this
      .sql`insert into grids(parameters, user_id, author, session_title, tracks, grid_id) values(${_grid.parameters}, ${_grid.user}, ${_grid.author}, ${_grid.sessionTitle}, ${_grid.tracks}, ${_grid.id})`;

    return id;
  }

  async updateGrid(grid: Grid): Promise<Grid> {
    await this
      .sql`update grids set tracks = ${grid.tracks} where user_id = ${grid.user_id}`;

    return grid;
  }
}
