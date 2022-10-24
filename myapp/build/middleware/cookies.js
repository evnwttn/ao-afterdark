"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookies = void 0;
const uuid_1 = require("uuid");
function setExpirationDate() {
    let date = new Date();
    date.setTime(date.getTime() + 2 * 24 * 60 * 60 * 1000);
    return date.toUTCString();
}
function setId() {
    const id = (0, uuid_1.v4)();
    return id;
}
//@ts-ignore
function cookies(req, res, next) {
    //   res.setHeader("Set-Cookie", [setId(), setExpirationDate()]);
    console.log(`Set-Cookie, [${setId()}, ${setExpirationDate()}]`);
    next();
}
exports.cookies = cookies;
//# sourceMappingURL=cookies.js.map