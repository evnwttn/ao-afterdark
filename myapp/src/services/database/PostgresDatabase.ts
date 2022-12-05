import postgres from "postgres";
import { Database } from "./Database";
import { PostgresOptions, UserLoginData, Grid } from "../../types";
import { v4 as uuidv4 } from "uuid";

export class PostgresDatabase extends Database {
  sql: any;
  port: number;
  host: string;
  database: string;
  user: string;
  password: string;

  constructor(postgresOptions: PostgresOptions) {
    super();

    this.port = 5432;
    this.host = postgresOptions.host;
    this.database = postgresOptions.database;
    this.user = postgresOptions.user;
    this.password = postgresOptions.password;
  }

  connect(): Promise<void> {
    this.sql = postgres({
      port: this.port,
      host: this.host,
      database: this.database,
      user: this.user,
      password: this.password,
    });

    return Promise.resolve();
  }

  async doesUserExist(userId: string): Promise<Boolean> {
    const returnUser = await this
      .sql`select * from users where user_id = ${userId} limit 1`;

    return returnUser ? true : false;
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

  async logInUser(user: Omit<UserLoginData, "id">): Promise<string> {
    const login = await this
      .sql`select * from users where email = ${user.email} and password = ${user.password}`;

    return login[0].user_id;
  }
  // const grids = await retrieveGrids()
  async retrieveGrids(user: string): Promise<Grid[]> {
    const grids = await this
      .sql`select parameters, author, session_title, tracks, grid_id from grids where user_id = ${user}`;

    return grids;
  }

  async createGrid(grid: Omit<Grid, "id">): Promise<string> {
    const id = uuidv4();
    const _grid: any = {
      ...grid,
      id,
    };

    const saveNewGrid = await this
      .sql`insert into grids(parameters, user_id, author, session_title, tracks, grid_id) values(${_grid.parameters}, ${_grid.user}, ${_grid.author}, ${_grid.sessionTitle}, ${_grid.tracks}, ${_grid.id})`;

    return id;
  }

  //updateGridTracks
  async updateGrid(grid: Omit<Grid, "user">): Promise<Omit<Grid, "user">> {
    await this
      .sql`update grids set tracks = ${grid.tracks} where grid_id = ${grid.id}`;

    return grid;
  }
}
