import { gql } from "@apollo/client";

export const getCourse = gql`
  query Course($id: ID!) {
    course(id: $id) {
      id
      name
    }
  }
`;
