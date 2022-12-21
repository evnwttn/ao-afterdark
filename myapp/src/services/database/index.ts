import { PostgresDatabase } from "./PostgresDatabase";
import { PostgresOptions } from "../../types";

export * from "./Database";
export * from "./PostgresDatabase";

export const postgresOptions: PostgresOptions = {
  port: 7142,
  host: process.env.PGHOST ?? "",
  database: process.env.PGDATABASE ?? "",
  user: process.env.PGUSER ?? "",
  password: process.env.PGPASSWORD ?? "",
};

const _db = new PostgresDatabase(postgresOptions);
_db.connect();
export const db = _db;

// read in config.son
// check what database to use -> database: { postgres: .. } || database: { file: }
// parse the 'database' config and then build whichever depending on config

// const _db = config.database.postgres ? new PostgresDatabase(config.database) : new File
