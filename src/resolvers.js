// Resolvers define the technique for fetching the types in the
// schema.
import { murmurhash3 } from "./utils";

// Resolvers define the technique for fetching the types in the
// schema.
const resolvers = client => ({
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
      const longUrl = params.longUrl;
      const shortUrl = murmurhash3(params.longUrl, 1).toString();
      client.set(longUrl, shortUrl);
      return {
        longUrl,
        shortUrl
      };
    }
  }
});

export default resolvers;
