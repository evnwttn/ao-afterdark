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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const express_session_1 = __importDefault(require("express-session"));
// import cookieParser from "cookie-parser";
const middleware_1 = require("./middleware");
const handlers_1 = require("./handlers");
require("dotenv").config();
const app = express.default();
const port = process.env.PORT || 5000;
app.use(middleware_1.cors);
app.use(express.json());
app.use((0, express_session_1.default)({
    resave: false,
    saveUninitialized: false,
    secret: "session",
    cookie: {
        maxAge: 1000 * 60 * 60,
        sameSite: "none",
        secure: true,
    },
}));
// save name as cookies
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.body.email;
        req.session.id = name;
        res.send({ message: "saved" }).status(201);
    }
    catch (error) {
        console.log(error);
    }
}));
//decode cookie
// app.post("/login", userHandler);
app.put("/login", handlers_1.userHandler);
app.post("/contact", handlers_1.contactsHandler);
app.post("/session", handlers_1.sessionHandler);
app.put("/session", handlers_1.sessionHandler);
app.get("/session", handlers_1.sessionHandler);
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
//# sourceMappingURL=app.js.map