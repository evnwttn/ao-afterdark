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
const uuid_1 = require("uuid");
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
        return __awaiter(this, void 0, void 0, function* () {
            const returnUser = yield this
                .sql `select * from users where user_id = ${userId}`;
            if (!returnUser) {
                return false;
            }
            return true;
        });
    }
    signUpUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = (0, uuid_1.v4)();
            const _user = Object.assign(Object.assign({}, user), { id });
            yield this
                .sql `insert into users(email, password, user_id) values(${_user.email}, ${_user.password}, ${_user.id}`;
            return true;
        });
    }
    logInUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const login = yield this
                .sql `select * from users where email = ${user.email} and password = ${user.password}`;
            return login[0].user_id;
        });
    }
    retrieveGrids(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const grids = yield this.sql `select * from grids where user_id = ${user}`;
            return grids;
        });
    }
    createGrid(grid) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = (0, uuid_1.v4)();
            yield this
                .sql `insert into grids(parameters, user_id, author, session_title, tracks, grid_id) values(${grid.parameters}, ${grid.user_id}, ${grid.author}, ${grid.sessionTitle}, ${grid.tracks}, ${id})`;
            return id;
        });
    }
    updateGrid(grid) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this
                .sql `update grids set tracks = ${grid.tracks} where user_id = ${grid.user_id}`;
            return grid;
        });
    }
}
exports.PostgresDatabase = PostgresDatabase;
//# sourceMappingURL=PostgresDatabase.js.map