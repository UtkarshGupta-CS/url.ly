// Resolvers define the technique for fetching the types in the
// schema.
import { murmurhash3 } from "./utils";

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve urls from the "urls" array above.
const resolvers = {
  Query: {
    getUrls: () => [],
    getLongUrl: (obj, params, context, info) => {
      return {
        longUrl: "www.example.com",
        shortUrl: params.shortUrl
      };
    }
  },

  Mutation: {
    genrateShortUrl: (_, params, context) => {
      return {
        longUrl: params.longUrl,
        shortUrl: murmurhash3(params.longUrl, 1).toString()
      };
    }
  }
};

export default resolvers;
