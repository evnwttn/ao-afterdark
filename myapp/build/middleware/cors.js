"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.additionalCors = void 0;
//@ts-ignore
function additionalCors(req, res, next) {
    res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
        "Access-Control-Allow-Credentials": "true",
    });
    next();
}
exports.additionalCors = additionalCors;
//# sourceMappingURL=cors.js.map