import { Request, Response } from "express";
import errorHandler from "../middleware/errHandler";
import User from "../models/User";

export const join = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    await User.create({ email, password });
  } catch (err) {
    const error = err as Error;
    return errorHandler(error, req, res);
  }

  const user = await User.find(); // 해당 db 에 user 라는 컬렉션이 존재하지 않기 때문에

  console.log(user);

  return res.send({ id: "asd" });
};
``;
