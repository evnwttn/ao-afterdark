"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.postgresOptions = void 0;
const PostgresDatabase_1 = require("./PostgresDatabase");
__exportStar(require("./Database"), exports);
__exportStar(require("./PostgresDatabase"), exports);
exports.postgresOptions = {
    port: 7142,
    host: (_a = process.env.PG_HOST) !== null && _a !== void 0 ? _a : "",
    database: (_b = process.env.PG_DB) !== null && _b !== void 0 ? _b : "",
    user: (_c = process.env.PG_USER) !== null && _c !== void 0 ? _c : "",
    password: (_d = process.env.PG_PW) !== null && _d !== void 0 ? _d : "",
};
const _db = new PostgresDatabase_1.PostgresDatabase(exports.postgresOptions);
_db.connect();
exports.db = _db;
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
//# sourceMappingURL=index.js.map