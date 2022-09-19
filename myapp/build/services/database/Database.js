"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const uuid_1 = require("uuid");
class Database {
    constructor() {
        const sessionId = { id: (0, uuid_1.v4)() };
    }
}
exports.Database = Database;
