import { Request, Response } from "express";
import errorHandler from "../middleware/errHandler";
import User from "../models/User";

export const join = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const isExist = await User.findOne({ email: email });

    if (isExist) {
      return res
        .status(400)
        .json({ message: "해당 이메일을 가진 유저가 존재합니다." });
    } else {
      await User.create({ email, password });
    }
  } catch (err) {
    const error = err as Error;
    return errorHandler(error, req, res);
  }

  const user = await User.find(); // 해당 db 에 user 라는 컬렉션이 존재하지 않기 때문에

  console.log(user);

  return res.send({ id: "asd" });
};
``;
