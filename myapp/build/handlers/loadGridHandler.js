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
exports.loadGridHandler = void 0;
const types_1 = require("../types");
const database_1 = require("../services/database");
function loadGridHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.db.retrieveGrids(req.session.userId);
            // const retrievedGrids = await db.retrieveGrids(req.session.userId as string);
            // res.status(StatusCodes.OK).json(retrievedGrids as Grid[]);
        }
        catch (error) {
            res.sendStatus(types_1.StatusCodes.INTERNAL_SERVER_ERROR);
        }
    });
}
exports.loadGridHandler = loadGridHandler;
//# sourceMappingURL=loadGridHandler.js.map