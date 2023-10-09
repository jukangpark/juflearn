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
