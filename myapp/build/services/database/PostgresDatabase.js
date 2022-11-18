"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDatabase = void 0;
const postgres_1 = __importDefault(require("postgres"));
const Database_1 = require("./Database");
class PostgresDatabase extends Database_1.Database {
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
        console.log("retrieve user");
        throw new Error("Method not implemented.");
    }
    signUpUser(user) {
        console.log("signup user");
        throw new Error("Method not implemented.");
    }
    logInUser(user) {
        console.log("login user");
        throw new Error("Method not implemented.");
    }
    retrieveGrids(user) {
        console.log("retrieve grids");
        throw new Error("Method not implemented.");
    }
    createGrid(grid) {
        console.log("create grids");
        throw new Error("Method not implemented.");
    }
    updateGrid(session) {
        console.log("update grids");
        throw new Error("Method not implemented.");
    }
}
exports.PostgresDatabase = PostgresDatabase;
//# sourceMappingURL=PostgresDatabase.js.map