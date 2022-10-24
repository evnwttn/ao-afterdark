"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookies = void 0;
const uuid_1 = require("uuid");
function setExpirationDate() {
    let date = new Date();
    date.setTime(date.getTime() + 2 * 24 * 60 * 60 * 1000);
    return date.toUTCString();
}
//@ts-ignore
function cookies(req, res, next) {
    const id = (0, uuid_1.v4)();
    const date = setExpirationDate();
    res.set({
        "Access-Control-Allow-Credentials": "true",
        "Set-Cookie": `id=${id}; expires=${date}`,
    });
    next();
}
exports.cookies = cookies;
//# sourceMappingURL=cookies.js.map