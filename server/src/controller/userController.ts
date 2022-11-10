import { Request, Response } from "express";
import User from "../models/User";

export const join = async (req: Request, res: Response) => {
  console.log(req.body);
  // const user = await User.find();
  console.log({ id: "asd" });
  return res.send({ id: "asd" });
};
