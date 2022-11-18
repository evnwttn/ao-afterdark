import { PostgresDatabase } from "./PostgresDatabase";

export * from "./Database";
export * from "./FileDatabase";
export * from "./PostgresDatabase";

// export const postgresOptions = {
//   host: process.env.PG_HOST ?? "",
//   database: process.env.PG_DB ?? "",
//   user: process.env.PG_USER ?? "",
//   password: process.env.PG_PW ?? "",
// };

export const postgresOptions = {
  host: "localhost",
  database: "ao",
  user: "postgres",
};

const _db = new PostgresDatabase(postgresOptions);
_db.connect();
export const db = _db;
