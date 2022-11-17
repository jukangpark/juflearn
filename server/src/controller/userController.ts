import { Request, Response } from "express";
// import User from "../models/User";
const { MongoClient } = require("mongodb");

// Create a new MongoClient

export const join = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  console.log(email, password);

  const client = new MongoClient(`${process.env.DB_URL}`);
  const users = await client.db("juflearn").collection("users");
  const cursor = await client.db("juflearn").collection("users").find({});
  const value = await cursor.toArray();

  const isExist = await users.find().toArray();

  console.log(isExist);

  // if(isExist) {
  //   return
  // }

  // console.log(value);

  // if (isExist[0] === undefined) {
  //   return res
  //     .status(400)
  //     .json({ message: "해당 이메일을 가진 유저가 존재합니다." });
  // }

  const doc = {
    email,
    password,
  };

  const result = await users.insertOne(doc);

  console.log(result);

  // await User.create({ email, password });

  return res.json({ message: "회원가입 완료" });
};
