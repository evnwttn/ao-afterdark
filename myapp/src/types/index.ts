export * from "./Grid";
export * from "./Track";
export * from "./TrackParams";
export * from "./StatusCodes";
export * from "./UserData";

declare module "express-session" {
  interface Session {
    userId: string;
  }
}
