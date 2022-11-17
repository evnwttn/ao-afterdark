"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDatabase = void 0;
const postgres_1 = __importDefault(require("postgres"));
const _1 = require(".");
class PostgresDatabase extends _1.Database {
    constructor(postgresOptions) {
        super();
        this.host = postgresOptions.host;
        this.database = postgresOptions.database;
        this.user = postgresOptions.user;
        this.password = postgresOptions.password;
    }
    connect() {
        this.sql = (0, postgres_1.default)({
            port: 5432,
            host: this.host,
            database: this.database,
            user: this.user,
            password: this.password,
        });
        return Promise.resolve();
    }
    retrieveUser(userId) {
        throw new Error("Method not implemented.");
    }
    signUpUser(user) {
        throw new Error("Method not implemented.");
    }
    logInUser(user) {
        throw new Error("Method not implemented.");
    }
    retrieveGrids(user) {
        throw new Error("Method not implemented.");
    }
    createGrid(grid) {
        throw new Error("Method not implemented.");
    }
    updateGrid(session) {
        throw new Error("Method not implemented.");
    }
}
exports.PostgresDatabase = PostgresDatabase;
//# sourceMappingURL=PostgresDatabase.js.map