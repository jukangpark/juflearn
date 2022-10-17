import { Request, Response } from "express";

export const join = (req: Request, res: Response) => {
  console.log(req);
  return res.end();
};
