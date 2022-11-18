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
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.postgresOptions = void 0;
const PostgresDatabase_1 = require("./PostgresDatabase");
__exportStar(require("./Database"), exports);
__exportStar(require("./FileDatabase"), exports);
__exportStar(require("./PostgresDatabase"), exports);
// export const postgresOptions = {
//   host: process.env.PG_HOST ?? "",
//   database: process.env.PG_DB ?? "",
//   user: process.env.PG_USER ?? "",
//   password: process.env.PG_PW ?? "",
// };
exports.postgresOptions = {
    host: "localhost",
    database: "ao",
    user: "postgres",
};
const _db = new PostgresDatabase_1.PostgresDatabase(exports.postgresOptions);
_db.connect();
exports.db = _db;
//# sourceMappingURL=index.js.map