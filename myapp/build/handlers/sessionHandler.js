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
    var _a, _b, _c, _d;
    if ((_b = (_a = body.tracks) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0 > 11) {
        return false;
    }
    if ((_d = (_c = body.parameters) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0 > 10) {
        return false;
    }
    return true;
}
function sessionHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.method !== "GET") {
            const sessionInvalid = validate(req.body);
            if (sessionInvalid) {
                res.sendStatus(types_1.StatusCodes.BAD_REQUEST);
            }
        }
        try {
            const db = new database_1.FileDatabase();
            switch (req.method) {
                case "POST":
                    const newSession = yield db.createSession(req.body);
                    res.status(types_1.StatusCodes.OK).json(newSession);
                    break;
                case "PUT":
                    const updatedSession = yield db.updateSession(req.body);
                    res.status(types_1.StatusCodes.OK).json(updatedSession);
                    break;
                case "GET":
                    console.log(req.body);
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            res.sendStatus(types_1.StatusCodes.INTERNAL_SERVER_ERROR);
        }
    });
}
exports.sessionHandler = sessionHandler;
//# sourceMappingURL=sessionHandler.js.map