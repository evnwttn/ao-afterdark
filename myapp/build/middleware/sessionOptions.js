"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionOptions = void 0;
const uuid_1 = require("uuid");
function setExpirationDate() {
    let date = new Date();
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
    return date;
}
const secret = (0, uuid_1.v4)();
const maxAge = setExpirationDate();
exports.sessionOptions = {
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: maxAge,
        httpOnly: true,
    },
};
//# sourceMappingURL=sessionOptions.js.map