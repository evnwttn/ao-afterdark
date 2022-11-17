import { PostgresDatabase } from "./PostgresDatabase";

export * from "./Database";
export * from "./FileDatabase";
export * from "./PostgresDatabase";

const _db = new PostgresDatabase();
_db.connect();
export const db = _db;

// process.env.....
