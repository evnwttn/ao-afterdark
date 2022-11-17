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
const types_1 = require("../types");
const database_1 = require("../services/database");
function sessionHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.session.userId) {
            return;
        }
        try {
            switch (req.method) {
                case "POST":
                    req.session.destroy(() => {
                        res.status(types_1.StatusCodes.OK).send(true);
                    });
                    break;
                case "PUT":
                    yield database_1.db.retrieveUser(req.session.userId);
                    // const retrieveUser = await db.retrieveUser(
                    //   req.session.userId as string
                    // );
                    // res.status(StatusCodes.OK).json(retrieveUser);
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