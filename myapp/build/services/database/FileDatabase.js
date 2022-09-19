"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDatabase = void 0;
const _1 = require(".");
const uuid_1 = require("uuid");
const fs = __importStar(require("fs/promises"));
const os = __importStar(require("os"));
class FileDatabase extends _1.Database {
}
exports.FileDatabase = FileDatabase;
constructor;
{
    const sessionId = { id: (0, uuid_1.v4)() };
}
async;
createSession(session, Session);
Promise < void  > {
    await: fs.appendFile('sessions.json', JSON.stringify(session) + os.EOL)
};
async;
updateSession(session, Session);
Promise < void  > {
    await: fs.writeFile('sessions.json', JSON.stringify(session) + os.EOL)
};
;
