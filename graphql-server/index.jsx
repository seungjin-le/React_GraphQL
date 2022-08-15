const { ApolloServer, gql } = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'Hello World'
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground:true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});