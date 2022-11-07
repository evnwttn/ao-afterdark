export * from "./Session";
export * from "./Track";
export * from "./TrackParams";
export * from "./StatusCodes";
export * from "./UserLoginData";

import { Session } from "express-session";

declare module "express-session" {
  interface Session {
    userId: string;
  }
}
