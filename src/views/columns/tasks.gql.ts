import { gql } from "@apollo/client";

export const tasksQuery = gql`
  query Tasks {
    tasks @client {
      id
      title
      description
      parentColumnId
    }
  }
`;
