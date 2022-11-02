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
function cookieHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const _id = req.session.userId;
            console.log(_id);
            res.status(types_1.StatusCodes.OK).json(_id);
        }
        catch (error) {
            res.status(types_1.StatusCodes.INTERNAL_SERVER_ERROR);
        }
    });
}
exports.cookieHandler = cookieHandler;
//# sourceMappingURL=cookieHandler.js.map