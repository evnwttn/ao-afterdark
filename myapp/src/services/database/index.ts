import { PostgresDatabase } from "./PostgresDatabase";

export * from "./Database";
export * from "./PostgresDatabase";

export const postgresOptions = {
  port: 5432,
  host: process.env.PG_HOST ?? "",
  database: process.env.PG_DB ?? "",
  user: process.env.PG_USER ?? "",
  password: process.env.PG_PW ?? "",
};

// read in config.son
// check what database to use -> database: { postgres: .. } || database: { file: }
// parse the 'database' config and then build whichever depending on config

// const _db = config.database.postgres ? new PostgresDatabase(config.database) : new File

const _db = new PostgresDatabase(postgresOptions);
_db.connect();
export const db = _db;
