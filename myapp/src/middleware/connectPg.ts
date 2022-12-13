import session from "express-session";

const pgSession = require("connect-pg-simple")(session);

export const connectPg = {};
