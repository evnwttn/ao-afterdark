import { PostgresDatabase } from "./PostgresDatabase";

export * from "./Database";
export * from "./PostgresDatabase";

export const postgresOptions = {
  host: process.env.PG_HOST ?? "",
  database: process.env.PG_DB ?? "",
  user: process.env.PG_USER ?? "",
  password: process.env.PG_PW ?? "",
};

const _db = new PostgresDatabase(postgresOptions);
_db.connect();
export const db = _db;
