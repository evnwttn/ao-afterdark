"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookies = void 0;
function setExpirationDate() {
    let date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
    return date.toUTCString();
}
function cookies(req, res) {
    res.setHeader("Set-Cookie", ["id=testy", setExpirationDate()]);
}
exports.cookies = cookies;
//# sourceMappingURL=cookies.js.map