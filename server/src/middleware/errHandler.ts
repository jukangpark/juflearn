import { Request, Response } from "express";

interface ResponseError extends Error {
  status?: number;
  // message?: string;
}

function errorHandler(err: ResponseError, req: Request, res: Response) {
  return res
    .status(err.status || 500)
    .json({ statusCode: err.status, message: err.message });
}

export default errorHandler;

// next() 를 인수 없이 호출하면 이후에 일치하는 route로 이동하지만,
// next() 에 인수를 전달하여 호출하면 Error handler 미들웨어 처리로 이동시킨다.
