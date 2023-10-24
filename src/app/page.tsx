"use client";

import { useQuery } from "@apollo/client";
import { getAllCourses } from "@/graphql/queries/getAllCourses";

interface Course {
  id: string;
  name: string;
}

const Home = () => {
  const { loading, error, data } = useQuery(getAllCourses);
  const courses = data?.courses;
  return (
    <div>
      <div className="relative h-[500px] bg-banner-background-color">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent ">
                Code King Academy
              </span>
            </h1>
            <h3>Code Like a KING</h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {loading ? (
          <h3>강의 불러오는 중</h3>
        ) : (
          <>
            {error ? (
              <h1>강의 불러오는 중 에러 발생</h1>
            ) : (
              <>
                {courses.map((course: Course) => {
                  return (
                    <div
                      key={course.id}
                      className="bg-white p-6 rounded-xl shadow-md"
                    >
                      <h1 className="text-lg font-bold">{course.name}</h1>
                      <div className="aspect-w-16 aspect-h-9 ">강의소개</div>
                    </div>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
