import { MongoDataSource } from "apollo-datasource-mongodb";

interface UserInterface {
  _id: string;
  name: string;
  email: string | undefined;
  image: string | undefined;
}

export default class User extends MongoDataSource<UserInterface> {
  async getUser(userId: string): Promise<UserInterface | null> {
    const user = await this.findOneById(userId);
    return user ?? null;
  }
}
