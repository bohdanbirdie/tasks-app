import { gql } from "@apollo/client";

export const columnsQuery = gql`
  query Columns {
    columns @client {
      id
      title
      tasks {
        id
        title
        description
        parentColumnId
      }
    }
  }
`;
