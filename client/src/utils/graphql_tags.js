import gql from "graphql-tag";

export const GET_SHORT_URL = gql`
  query urlsQuery {
    getUrls {
      shortUrl
    }
  }
`;
