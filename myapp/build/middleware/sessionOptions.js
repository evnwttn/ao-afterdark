"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionOptions = void 0;
const express_session_1 = __importDefault(require("express-session"));
const session_file_store_1 = __importDefault(require("session-file-store"));
const FileStore = (0, session_file_store_1.default)(express_session_1.default);
const filestoreOptions = {};
exports.sessionOptions = {
    store: new FileStore(filestoreOptions),
    secret: "shhh",
    retries: 0,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 2592000000,
        secure: false,
    },
};
//# sourceMappingURL=sessionOptions.js.map