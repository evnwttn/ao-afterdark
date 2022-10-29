"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionOptions = void 0;
const uuid_1 = require("uuid");
const secret = (0, uuid_1.v4)();
exports.sessionOptions = {
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: Date.now() + 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};
//# sourceMappingURL=sessionOptions.js.map