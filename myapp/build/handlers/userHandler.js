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
const types_1 = require("../types");
const database_1 = require("../services/database");
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
        const validUser = validate(req.body);
        if (!validUser) {
            res.sendStatus(types_1.StatusCodes.BAD_REQUEST);
        }
        try {
            switch (req.method) {
                case "POST":
                    const signUpUser = yield database_1.db.signUpUser(req.body);
                    res.status(types_1.StatusCodes.OK).send(signUpUser);
                    break;
                case "PUT":
                    const loginUserId = yield database_1.db.logInUser(req.body);
                    // if (!req.session.userId) {
                    //   req.session.userId = loginUserId;
                    // }
                    res.status(types_1.StatusCodes.OK).send(true);
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
exports.userHandler = userHandler;
//# sourceMappingURL=userHandler.js.map