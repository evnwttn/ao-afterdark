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
    if (body) {
        if (body.author && body.author.length <= 14) {
            if (body.sessionTitle && body.sessionTitle.length <= 14) {
                if (body.tracks && body.tracks.length <= 11) {
                    if (body.parameters && body.parameters.length <= 10) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
function sessionHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionCleared = validate(req.body);
        if (!sessionCleared) {
            res.sendStatus(types_1.StatusCodes.BAD_REQUEST);
        }
        try {
            const db = new database_1.FileDatabase();
            yield db.updateSession(req.body);
            res
                .status(types_1.StatusCodes.OK);
        }
        catch (error) {
            res.sendStatus(types_1.StatusCodes.INTERNAL_SERVER_ERROR);
        }
    });
}
exports.sessionHandler = sessionHandler;
