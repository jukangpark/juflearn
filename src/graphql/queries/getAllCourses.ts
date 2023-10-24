import { gql } from "@apollo/client";

export const getAllCourses = gql`
  query AllCourses {
    courses {
      id
      name
    }
  }
`;
