"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieHandler = void 0;
const types_1 = require("../types");
const uuid_1 = require("uuid");
function setExpirationDate() {
    let date = new Date();
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
    return date.toUTCString();
}
function cookieHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = (0, uuid_1.v4)();
        const date = setExpirationDate();
        try {
            res.status(types_1.StatusCodes.OK).cookie("cookieName", "cookieValue");
            console.log(req.cookies);
        }
        catch (error) {
            console.log(error);
        }
        next();
    });
}
exports.cookieHandler = cookieHandler;
//# sourceMappingURL=cookieHandler.js.map