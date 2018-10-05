// Resolvers define the technique for fetching the types in the
// schema.
import { murmurhash3 } from "./utils";

// Resolvers define the technique for fetching the types in the
// schema.
const resolvers = client => {
  return {
    Query: {
      getUrls: () => [],
      getLongUrl: (obj, params, context, info) => {
        let longUrl = "";
        const isKeyExist = client.get(
          `shorturl:${params.shortUrl}`,
          (err, res) => {
            if (err) throw err;

            if (res !== null) {
              longUrl = res.toString();
            }
            console.log(res);
          }
        );
        console.log(longUrl, isKeyExist);
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
