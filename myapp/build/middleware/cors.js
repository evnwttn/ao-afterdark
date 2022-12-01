"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
exports.corsOptions = {
    origin: true,
    methods: "POST, PUT, GET, OPTIONS",
    allowedHeaders: "Access-Control-Allow-Headers, Origin, Authorization, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
    credentials: true,
    preflightContinue: true,
};
//# sourceMappingURL=cors.js.map