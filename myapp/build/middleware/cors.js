"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsHandler = void 0;
function corsHandler(req, res, next) {
    res.set({
        "Access-Control-Allow-Origin": "https://evnwttn.github.io/ao/",
        "Access-Control-Allow-Methods": "POST, PUT, OPTIONS",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Content-Type",
    });
    next();
}
exports.corsHandler = corsHandler;
//# sourceMappingURL=cors.js.map