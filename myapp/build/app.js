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
const express = __importStar(require("express"));
// import cookieParser from "cookie-parser";
const middleware_1 = require("./middleware");
const handlers_1 = require("./handlers");
require("dotenv").config();
const app = express.default();
const port = process.env.PORT || 5000;
app.use(middleware_1.cors);
app.use(express.json());
// app.use(cookieParser());
app.post("/login", handlers_1.userHandler);
app.put("/login", handlers_1.userHandler);
app.post("/contact", handlers_1.contactsHandler);
app.post("/session", handlers_1.sessionHandler);
app.put("/session", handlers_1.sessionHandler);
app.get("/session", handlers_1.sessionHandler);
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
//# sourceMappingURL=app.js.map