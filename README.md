# React_GraphQL

## GraphQL 설치(npm, yarn)
```shell
npm install graphql

yarn add graphql
```
## Apollo 라이브러리 설치(npm, yarn)
```shell
npm install apollo-server

yarn add apollo-server
```
## GraphQL + Apollo 한번에 설치(npm, yarn)
```shell
npm install apollo-server graphql

yarn add apollo-server graphql
```

## 초기설정
+ ### My-Project/server/index.js
  ```javascript
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
      hello: () => 'world',
    },
  };
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
  ```