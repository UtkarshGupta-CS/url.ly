// Resolvers define the technique for fetching the types in the
// schema.  

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
    urls: () => urls
  }
};

export default resolvers;
