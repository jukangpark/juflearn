import { Request, Response } from "express";

export const lectureAll = async (req: Request, res: Response) => {
  console.log(req.body);

  // await User.create({ email: "skyxxx9339@gmail.com", password: "9339" });

  //   const user = await User.find(); // 해당 db 에 user 라는 컬렉션이 존재하지 않기 때문에

  //   console.log(user);

  return res.send([{ name: "lecture", content: "test" }]);
};
