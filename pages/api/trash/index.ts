import { TrashModel } from "../../../models";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnection";

interface UpdateTrashBody {
  organicCapacity: number;
  anorganicCapacity: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "GET") {
    const trash = await TrashModel.find({}).sort({ _id: -1 }).lean();
    res.status(200).json({
      status: "success",
      message: "get all trash",
      data: trash[0],
    });
  } else if (req.method === "POST") {
    const body = req.body as UpdateTrashBody;
    const findTrash = await TrashModel.find({}).sort({ _id: -1 }).exec();
    if (!findTrash.length) {
      const trash = new TrashModel({
        organicCapacity: body.organicCapacity,
        anorganicCapacity: body.anorganicCapacity,
      });
      await trash.save();
      res.status(201).json(trash.toJSON());
    } else {
      const trash = findTrash[0];
      trash.anorganicCapacity = body.anorganicCapacity;
      trash.organicCapacity = body.organicCapacity;
      await trash.save();
      res.status(201).json(trash);
    }
  } else {
    res.status(409).json({ error: "Method not allowed" });
  }
}
