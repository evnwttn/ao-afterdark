"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionOptions = void 0;
exports.sessionOptions = {
    secret: "test321",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: Date.now() + 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};
//# sourceMappingURL=sessionOptions.js.map