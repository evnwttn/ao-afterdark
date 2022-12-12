"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsHandler = void 0;
function corsHandler(req, res, next) {
    res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET,PUT,POST,OPTIONS",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Accept, Content-Type, Referer, sec-ch-ua, sec-ch-ua-mobile, sec-ch-ua-platform, User-Agent",
    });
    next();
}
exports.corsHandler = corsHandler;
//# sourceMappingURL=cors.js.map