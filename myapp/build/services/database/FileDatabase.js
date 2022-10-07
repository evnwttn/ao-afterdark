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
exports.FileDatabase = void 0;
const _1 = require(".");
const fs = __importStar(require("fs/promises"));
const os = __importStar(require("os"));
const uuid_1 = require("uuid");
class FileDatabase extends _1.Database {
    createSession(session) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = (0, uuid_1.v4)();
            const _session = Object.assign(Object.assign({}, session), { id });
            yield fs.appendFile("sessions.json", JSON.stringify(_session) + os.EOL);
            return _session;
        });
    }
    updateSession(session) {
        return __awaiter(this, void 0, void 0, function* () {
            const sessionsDatabase = yield fs.readFile("sessions.json", {
                encoding: "utf-8",
            });
            const sessionFiles = sessionsDatabase.split(/\r?\n/);
            const index = sessionFiles.findIndex((file) => JSON.parse(file).id === session.id);
            if (index === -1) {
                return session;
            }
            sessionFiles[index] = JSON.stringify(session);
            yield fs.writeFile("sessions.json", sessionFiles.join("\n"));
            return session;
        });
    }
}
exports.FileDatabase = FileDatabase;
//# sourceMappingURL=FileDatabase.js.map