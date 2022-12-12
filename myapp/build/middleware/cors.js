"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsHandler = void 0;
function corsHandler(req, res, next) {
    res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000'",
        "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS, POST, PUT",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Accept, Content-Type, Referer, User-Agent",
    });
    next();
}
exports.corsHandler = corsHandler;
//# sourceMappingURL=cors.js.map