import express from "express";
import { join } from "../controller/userController";

const userRouter = express.Router();

userRouter.route("/join").post(join);

export default userRouter;
