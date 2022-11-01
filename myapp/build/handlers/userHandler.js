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
exports.userHandler = void 0;
const database_1 = require("../services/database");
const types_1 = require("../types");
function validate(body) {
    if (!body.email) {
        return false;
    }
    if (!body.password) {
        return false;
    }
    return true;
}
function userHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        function setSessionId(userId) {
            if (!req.session.userId) {
                req.session.userId = userId;
            }
        }
        const validUser = validate(req.body);
        if (!validUser) {
            res.sendStatus(types_1.StatusCodes.BAD_REQUEST);
        }
        try {
            const db = new database_1.FileDatabase();
            switch (req.method) {
                case "GET":
                    if (req.session.userId) {
                        console.log(`welcome back ${req.session.userId}`);
                    }
                    break;
                case "POST":
                    const signUpUser = yield db.signUpUser(req.body);
                    setSessionId(signUpUser.id);
                    res.status(types_1.StatusCodes.OK).json(signUpUser);
                    break;
                case "PUT":
                    const logInUser = yield db.logInUser(req.body);
                    setSessionId(logInUser.id);
                    res.status(types_1.StatusCodes.OK).json(logInUser);
                    break;
                default:
                    res.sendStatus(types_1.StatusCodes.BAD_REQUEST);
            }
        }
        catch (error) {
            res.sendStatus(types_1.StatusCodes.INTERNAL_SERVER_ERROR);
        }
    });
}
exports.userHandler = userHandler;
//# sourceMappingURL=userHandler.js.map