// Resolvers define the technique for fetching the types in the
// schema.
const { promisify } = require("util");
import { murmurhash3 } from "./utils";

// Resolvers define the technique for fetching the types in the
// schema.
const resolvers = client => {
  const getAsync = promisify(client.get).bind(client);
  return {
    Query: {
      getUrls: () => [],
      getLongUrl: async (obj, params, context, info) => {
        let longUrl = "";
        const isKeyExist = await getAsync(`shorturl:${params.shortUrl}`).then(
          res => {
            longUrl = res.toString();
            console.log(longUrl);
          }
        );
        console.log(longUrl);
        if (isKeyExist) {
          return {
            longUrl,
            shortUrl: params.shortUrl
          };
        }
      }
    },

    Mutation: {
      genrateShortUrl: (_, params, context) => {
        const longUrl = params.longUrl;
        const shortUrl = murmurhash3(params.longUrl, 1).toString();
        client.set(`shorturl:${shortUrl}`, longUrl);
        return {
          longUrl,
          shortUrl
        };
      }
    }
  };
};

export default resolvers;
