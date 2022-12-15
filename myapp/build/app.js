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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
require("dotenv").config();
const middleware_1 = require("./middleware");
const handlers_1 = require("./handlers");
require("./services/database/index");
const app = express.default();
const port = process.env.PORT || 5000;
const corsOptions = {
    origin: "https://evnwttn.github.io",
    methods: "POST, PUT, GET, OPTIONS",
    allowedHeaders: "Content-Type",
    credentials: "true",
};
app.use(express.json());
app.use((0, cors_1.default)(corsOptions));
// app.use(corsHandler);
app.use((0, express_session_1.default)(middleware_1.connectPg));
app.put("/user", handlers_1.userHandler); // login user
app.post("/user", handlers_1.userHandler); // signup user
app.post("/load", handlers_1.loadGridHandler); // load grid list
app.put("/grid", handlers_1.gridHandler); // update grid
app.post("/grid", handlers_1.gridHandler); // create grids
app.put("/session", handlers_1.sessionHandler); // retrieve session
app.post("/session", handlers_1.sessionHandler); // destroy session
app.post("/contact", handlers_1.contactsHandler); // contact email
// app.options("/load", loadGridHandler);
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
//# sourceMappingURL=app.js.map