"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionOptions = void 0;
const uuid_1 = require("uuid");
const express_session_1 = __importDefault(require("express-session"));
const FileStore = require("session-file-store")(express_session_1.default);
const secret = (0, uuid_1.v4)();
exports.sessionOptions = {
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 2592000000,
    },
};
//# sourceMappingURL=sessionOptions.js.map