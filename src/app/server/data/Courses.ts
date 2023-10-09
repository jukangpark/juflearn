import { MongoDataSource } from "apollo-datasource-mongodb";

interface Course {
  _id: string;
  name: string;
  description: string;
}

export default class Courses extends MongoDataSource<Course> {
  async getCourses(courseId: string): Promise<Course | null> {
    const course = await this.findOneById(courseId);
    return course ?? null;
  }
}
