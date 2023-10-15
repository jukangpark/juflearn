"use client";

import { useQuery } from "@apollo/client";
import { getCourse } from "@/graphql/queries/getCourse";

const Home = () => {
  const courseId = "65237bccae11a112903841a7";
  const { loading, error, data } = useQuery(getCourse, {
    variables: { id: courseId },
  });

  console.log("data", data);

  if (error) {
    return <h1>에러 발생</h1>;
  }

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
      {loading ? (
        <h3>강의 불러오는 중</h3>
      ) : (
        <div>
          <h1>{data?.course?.id}</h1>
          <h1>{data?.course?.name}</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
