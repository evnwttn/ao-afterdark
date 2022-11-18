"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        return __awaiter(this, void 0, void 0, function* () {
            const _user = user;
            const login = yield this
                .sql `select * from users where email = ${_user.email} and password = ${_user.password}`;
            return _user.id;
        });
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