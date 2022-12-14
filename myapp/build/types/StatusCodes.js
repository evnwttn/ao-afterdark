"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpMethods = exports.StatusCodes = void 0;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCodes[StatusCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(StatusCodes = exports.StatusCodes || (exports.StatusCodes = {}));
var HttpMethods;
(function (HttpMethods) {
    HttpMethods["POST"] = "POST";
    HttpMethods["PUT"] = "PUT";
    HttpMethods["GET"] = "GET";
})(HttpMethods = exports.HttpMethods || (exports.HttpMethods = {}));
//# sourceMappingURL=StatusCodes.js.map