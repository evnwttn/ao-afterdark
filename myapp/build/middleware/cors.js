"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = void 0;
//@ts-ignore
function cors(req, res, next) {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
    });
    next();
}
exports.cors = cors;
//# sourceMappingURL=cors.js.map