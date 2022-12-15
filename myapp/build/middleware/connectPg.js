"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectPg = void 0;
const express_session_1 = __importDefault(require("express-session"));
const connect_pg_simple_1 = __importDefault(require("connect-pg-simple"));
const SessionStore = (0, connect_pg_simple_1.default)(express_session_1.default);
const storeOptions = {};
exports.connectPg = {
    store: new SessionStore(storeOptions),
    secret: "shhh",
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 2592000000,
        secure: true,
        httpOnly: false,
        sameSite: "none",
    },
};
//# sourceMappingURL=connectPg.js.map