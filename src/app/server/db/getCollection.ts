import { MongoClient } from "mongodb";

/**
 * Returns a specific collection from the MongoDB database.
 *
 * @param {MongoClient} client - An instance of the MongoClient connected to MongoDB.
 * @param {string} collectionName - The name of the collection to be retrieved.
 *
 * @returns {Collection} The desired MongoDB collection.
 */
async function getCollection(client: MongoClient, collectionName: string) {
  const db = client.db("juflearn");
  return db.collection(collectionName);
}

export default getCollection;
