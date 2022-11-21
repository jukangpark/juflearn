// import mongoose from "mongoose";

// mongoose.connect(`${process.env.DB_URL}`);
// // heroku에 DB_URL 은 따로 정의 되어 있다.
// // 따라서 local DB는 루트 디렉토리의 .env 에 숨겨주고
// // 웹에서 실행했을 경우 heroku config vars를 참조하도록 만든다.

// const db = mongoose.connection;

// const handleOpen = () => console.log("Connected to DB");
// const handleError = (error: Error) => console.log("DB Error", error);

// db.on("error", handleError);
// db.once("open", handleOpen);

// // mongodb driver 설치 후 연결하기
// // native mongodb 쿼리 작성해보기

const { MongoClient } = require("mongodb");
// Connection URI

const uri = `mongodb+srv://skyxxx9339:${process.env.PASSWORD}@juflearn.xzhyycz.mongodb.net/?retryWrites=true&w=majority`;
// Create a new MongoClient
export const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("juflearn").command({ ping: 1 });
    console.log("Connected successfully to DB");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
