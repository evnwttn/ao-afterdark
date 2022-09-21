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
exports.sessionHandler = void 0;
const database_1 = require("../services/database");
const types_1 = require("../types");
function validate(body) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    // validates author is less than 14 characters
    if ((_b = (_a = body.author) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0 > 14) {
        return false;
    }
    // validates session title is less than 14 characters
    if ((_d = (_c = body.sessionTitle) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0 > 14) {
        return false;
    }
    // validates there are less than 11 tracks
    if ((_f = (_e = body.tracks) === null || _e === void 0 ? void 0 : _e.length) !== null && _f !== void 0 ? _f : 0 > 11) {
        return false;
    }
    // validates there are less than 10 session parameters 
    if ((_h = (_g = body.parameters) === null || _g === void 0 ? void 0 : _g.length) !== null && _h !== void 0 ? _h : 0 > 10) {
        return false;
    }
    return true;
}
function sessionHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionValidated = validate(req.body);
        if (!sessionValidated) {
            res.sendStatus(types_1.StatusCodes.BAD_REQUEST);
        }
        try {
            const db = new database_1.FileDatabase();
            if (req.method === "POST") {
                yield db.createSession(req.body);
            }
            else {
                yield db.updateSession(req.body);
            }
            res.status(types_1.StatusCodes.OK).json(req.body);
        }
        catch (error) {
            res.sendStatus(types_1.StatusCodes.INTERNAL_SERVER_ERROR);
        }
    });
}
exports.sessionHandler = sessionHandler;
