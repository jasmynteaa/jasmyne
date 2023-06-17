import _mongoose from "mongoose";

declare module globalThis {
  var mongoose: {
    conn: typeof _mongoose | null;
    promise: Promise<typeof _mongoose> | null;
  };
}
