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
exports.gridHandler = void 0;
const types_1 = require("../types");
const database_1 = require("../services/database");
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
function gridHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const invalid = validate(req.body);
        if (invalid) {
            res.sendStatus(types_1.StatusCodes.BAD_REQUEST);
        }
        try {
            const user = req.session.userId;
            const newGrid = Object.assign(Object.assign({}, req.body), { user });
            switch (req.method) {
                case "POST":
                    const newGridId = yield database_1.db.createGrid(newGrid);
                    const newGridNoUser = Object.assign(Object.assign({}, req.body), { id: newGridId });
                    res.status(types_1.StatusCodes.OK).json(newGridNoUser);
                    break;
                case "PUT":
                    const updatedGrid = yield database_1.db.updateGrid(req.body);
                    // grid put 500 error
                    // definitely sql formatting error
                    res.status(types_1.StatusCodes.OK).json(req.body);
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
exports.gridHandler = gridHandler;
//# sourceMappingURL=gridHandler.js.map