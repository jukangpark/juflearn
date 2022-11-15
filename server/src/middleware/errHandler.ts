import { Request, Response } from "express";

function errorHandler(err: Error, req: Request, res: Response) {
  return res
    .status(500)
    .json({ statusCode: res.statusCode, message: err.message });
}

export default errorHandler;

// next() 를 인수 없이 호출하면 이후에 일치하는 route로 이동하지만,
// next() 에 인수를 전달하여 호출하면 Error handler 미들웨어 처리로 이동시킨다.
