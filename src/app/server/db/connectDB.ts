import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI as string;

let client = new MongoClient(MONGO_URI);

async function connectDB() {
  if (!client.connect()) {
    try {
      await client.connect();
      console.log("MongoDB 연결됨");
    } catch (error) {
      console.error("MongoDB 연결에 실패했습니다:", error);
      throw error;
    }
  }

  return client;
}

export default connectDB;
