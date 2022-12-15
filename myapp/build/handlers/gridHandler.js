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
// function validate(body: Partial<Grid>): boolean {
//   if (body.tracks?.length ?? 0 > 11) {
//     return false;
//   }
//   if (body.parameters?.length ?? 0 > 10) {
//     return false;
//   }
//   return true;
// }
function gridHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // const valid = validate(req.body as Partial<Grid>);
        // if (!valid) {
        //   res.sendStatus(StatusCodes.BAD_REQUEST);
        // }
        console.log(`gridHandler userId: ${req.session.userId}`);
        console.log(`gridHandler body: ${req.body}`);
        try {
            const user = req.session.userId;
            const newGrid = Object.assign(Object.assign({}, req.body), { user });
            switch (req.method) {
                case "POST":
                    console.log(`post/grid/ user: ${req.session.userId}`);
                    console.log(`post/grid/ grid: ${newGrid}`);
                    const newGridId = yield database_1.db.createGrid(newGrid);
                    const newGridNoUser = Object.assign(Object.assign({}, req.body), { id: newGridId });
                    res.status(types_1.StatusCodes.OK).json(newGridNoUser);
                    break;
                case "PUT":
                    console.log(`put/grid/ user: ${req.session.userId}`);
                    console.log(`put/grid/ grid: ${req.body}`);
                    const updatedGridTracks = yield database_1.db.updateGridTracks(req.body);
                    res.status(types_1.StatusCodes.OK).json(req.body);
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.log(`error/grid/ user: ${req.session.userId}`);
            console.log(`error/grid/ grid: ${req.body}`);
            res.sendStatus(types_1.StatusCodes.INTERNAL_SERVER_ERROR);
        }
    });
}
exports.gridHandler = gridHandler;
//# sourceMappingURL=gridHandler.js.map