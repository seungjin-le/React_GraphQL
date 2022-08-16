# React_GraphQL

## Project 에 서버용 디렉토리 추가
### 1. my-project/graphql-server(GraphQL 디렉토리)
### 2. 티미널로 폴더이동 `cd my-project/graphql-server`
### 3. `graphql-server`디렉토리에 `package.json`추가
    npm init -y
### 4. `graphql-server/package.json`스크립트 변경
```json
{
  "Before change": "Before change",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  
  "After change": "Before change",
  "scripts": {
    "dev": "nodemon index.js"
  }
}
```
    

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

## Apollo 초기설정
+ ### my-project/graphql-server/index.js
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
  
## 서버 열기
```shell
npm run dev
```

## typeDef는 무엇인가?
+ ### typeDef
  ```javascript
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;
  ```
GraphQL에서 사용하는 스키마의 대한 정의를 하는 곳이며 클라이언트에서 GraphQL로
서버에 어떠한 요청을 할 때 어떤 식으로 요청을 하는지에 대한 스키마도 정할 수 있습니다
간단하게 생각하면 GraphQL의 스키마를 정하는곳이다 라고 생각할 수 있습니다.

## resolver는 무엇인가?
+ ### resolver
  ```javascript
  const resolvers = {
    Query: {
      hello: () => 'Hello World',
    },
  };
  ```
  클라이언트에서 GraphQL 로 서버에 어떠한 요청을 할 때 해당 요청의 응답을 작성하는
곳 입니다. 클라이언트에서 GraphQL로 `typeDef`가 정의한 요청에 알맞게 요청한다면
`resolvers`는 `"data": { "hello" : "Hello World" } `라는 응답을 하게 됩니다.
그리고 `typeDef`와 `resolvers`는 한쌍을 이루게 되어 있습니다.
`typeDef`와 `resolvers`작성한다음 `ApolloServer`에 넣으면 서버가 완성이 됩니다.

  ```javascript
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  ```

## 배운것 정리
+ ### typeDef(s)
  + #### GraphQL의 Schema(스키마)를 정의 하는곳.
    + Object
    + Query
    + Mutation
    + input
  + #### gql 과 template literal 로 작성한다.
    + template literal
      ```javascript
      // React.js 의 styled-components 처럼 
      // 백틱안에 값을 정의하는 방법
      const typeDefs = gql`
        type Query {
          hello: String
      }
      `;
      ```
+ ### resolver(s)
  + #### Schema(스키마)에 해당하는 구현을 하는 곳
  + #### 요청을 받아 데이터를 조회, 수정, 삭제를 하는 곳

## 특정 데이터 조회
+ #### bookId를 받아오는 쿼리 작성 
  ```javascript
  const typeDefs = gql`
    type Query {
      hello: String
      books:[Book]
      
      // bookId를 받아오는 쿼리
      book(bookId : Int) : Book
      
    },
    type Book {
      bookId: Int,
      title: String,
      message: String,
      author: String,
      url: String
    }
  `;
  ```
  
+ #### bookId를 받아 데이터를 찾아 리턴 하는 함수 작성
  ```javascript
  const resolvers = {
    Query: {
      hello: () => 'Hello World',
      books: () => {
        return JSON.parse(readFileSync(join(__dirname, "books.json")).toString());
      },
      book:(parent, args, context, info) => {
        const books = JSON.parse(readFileSync(join(__dirname, "books.json")).toString());
        return books.find(book => book.bookId === args.bookId);
      },
    },
  };
  ```