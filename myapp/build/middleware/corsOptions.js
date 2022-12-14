"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
exports.corsOptions = {
    origin: "https://evnwttn.github.io",
    methods: "POST, PUT, GET, OPTIONS, HEAD",
    allowedHeaders: "Content-Type",
    credentials: true,
    maxAge: 5,
    preflightContinue: true,
};
//# sourceMappingURL=corsOptions.js.map