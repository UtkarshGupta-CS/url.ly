import { ApolloServer, gql } from "apollo-server";
import resolvers from "./resolvers";
import typeDefs from "./schema.graphql";

import redis from "redis";

const client = redis.createClient();

client.on("error", err => {
  console.log("Error " + err);
});

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers: resolvers(client) });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url} ${server.graphqlPath}`);
});
