import { PostgresDatabase } from "./PostgresDatabase";
import { PostgresOptions } from "../../types";

export * from "./Database";
export * from "./PostgresDatabase";

export const postgresOptions: PostgresOptions = {
  port: 6034,
  host: process.env.PG_HOST ?? "",
  database: process.env.PG_DB ?? "",
  user: process.env.PG_USER ?? "",
  password: process.env.PG_PW ?? "",
};

const _db = new PostgresDatabase(postgresOptions);
_db.connect();
export const db = _db;

// const main = async () => {
//   _db.updateGridTracks({
//     author: "123",
//     id: "234",
//     parameters: ["title", "11111111111"],
//     sessionTitle: "123",
//     tracks: [
//       {
//         title: "11111111111",
//         parameters: [
//           { parameter: "11111111111", colour: "#7284A8", comment: "" },
//         ],
//       },
//     ],
//   });
// };

// main().then(() => console.log("sent"));

// read in config.son
// check what database to use -> database: { postgres: .. } || database: { file: }
// parse the 'database' config and then build whichever depending on config

// const _db = config.database.postgres ? new PostgresDatabase(config.database) : new File
