"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionOptions = void 0;
const express_session_1 = __importDefault(require("express-session"));
const FileStore = require("session-file-store")(express_session_1.default);
const filestoreOptions = {};
exports.sessionOptions = {
    store: new FileStore(filestoreOptions),
    secret: "shhh",
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 2592000000,
    },
};
//# sourceMappingURL=sessionOptions.js.map