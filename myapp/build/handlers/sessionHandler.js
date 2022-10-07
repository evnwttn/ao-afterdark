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
    // validates there are less than 11 tracks
    if ((_b = (_a = body.tracks) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0 > 11) {
        return false;
    }
    // validates there are less than 10 session parameters
    if ((_d = (_c = body.parameters) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0 > 10) {
        return false;
    }
    return true;
}
function sessionHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionInvalid = validate(req.body);
        if (sessionInvalid) {
            res.sendStatus(types_1.StatusCodes.BAD_REQUEST);
            console.log(`24`);
        }
        try {
            const db = new database_1.FileDatabase();
            if (req.method === "POST") {
                const _session = yield db.createSession(req.body);
                res.status(types_1.StatusCodes.OK).json(_session);
            }
            else {
                yield db
                    .updateSession(req.body)
                    .then(() => res.status(types_1.StatusCodes.OK).json(req.body));
            }
        }
        catch (error) {
            res.sendStatus(types_1.StatusCodes.INTERNAL_SERVER_ERROR);
        }
    });
}
exports.sessionHandler = sessionHandler;
//# sourceMappingURL=sessionHandler.js.map