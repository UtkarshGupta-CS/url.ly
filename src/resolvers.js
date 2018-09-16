// Resolvers define the technique for fetching the types in the
// schema.
import { murmurhash3 } from "./utils";
const urls = [
  {
    shortUrl: "Harry Potter and the Chamber of Secrets",
    longUrl: "J.K. Rowling"
  },
  {
    shortUrl: "Jurassic Park",
    longUrl: "Michael Crichton"
  }
];

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve urls from the "urls" array above.
const resolvers = {
  Query: {
    getUrls: () => urls
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
