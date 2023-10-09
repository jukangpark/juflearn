import { MongoDataSource } from "apollo-datasource-mongodb";

interface CourseInterface {
  _id: string;
  name: string;
  description: string;
}

export default class Course extends MongoDataSource<CourseInterface> {
  async getCourse(courseId: string): Promise<CourseInterface | null> {
    const course = await this.findOneById(courseId);
    return course ?? null;
  }
}
