"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookies = void 0;
const uuid_1 = require("uuid");
function setExpirationDate() {
    let date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
    return date.toUTCString();
}
function cookies(req, res) {
    const id = (0, uuid_1.v4)();
    res.setHeader("Set-Cookie", [`id=${id}`, setExpirationDate()]);
}
exports.cookies = cookies;
//# sourceMappingURL=cookies.js.map