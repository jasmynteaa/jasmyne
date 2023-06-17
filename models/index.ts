import { prop, getModelForClass } from "@typegoose/typegoose";

class TrashSchema {
  @prop()
  organicCapacity: number;

  @prop()
  anorganicCapacity: number;
}

export const TrashModel = getModelForClass(TrashSchema);
