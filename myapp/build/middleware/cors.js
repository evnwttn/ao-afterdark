"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsHandler = void 0;
function corsHandler(req, res, next) {
    // console.log(JSON.stringify(req.headers));
    // console.log(req.method);
    // console.log(req.path);
    res.set({
        "Access-Control-Allow-Origin": "https://evnwttn.github.io",
        "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Content-Type",
    });
    next();
}
exports.corsHandler = corsHandler;
// cors middleware package w ^^^^^
// Access-Control-Max-Age
// chrome & firefox
// postman / test end point
// swap out axios
//# sourceMappingURL=cors.js.map