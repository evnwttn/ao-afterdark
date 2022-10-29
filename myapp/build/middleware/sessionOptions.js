"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionOptions = void 0;
exports.sessionOptions = {
    secret: "test321",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: Date.now() + 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    },
};
//# sourceMappingURL=sessionOptions.js.map