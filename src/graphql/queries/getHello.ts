import { gql } from "@apollo/client";

export const getHello = gql`
  query Hello {
    hello
  }
`;
