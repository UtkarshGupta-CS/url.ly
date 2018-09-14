import { gql } from "apollo-server";

export default gql`
  type Url {
    shortUrl: String
    longUrl: String
  }

  type Query {
    getUrls: [Url]
  }
`;
