import express from "express";
import { lectureAll } from "../controller/lectureController";

const lectureRouter = express.Router();

lectureRouter.route("/all").get(lectureAll);

export default lectureRouter;
