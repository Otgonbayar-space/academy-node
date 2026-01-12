export const movieTypesDefs = `
  type Award {
     wins: Int
     nominations: Int
     text: String
  }

  type Movie {
    _id: ID
    title: String
    author: String
    awards: [Award]
   
  }
    type auth{
    message: String
    token: String
    }

  input MovieInput {
    title: String
    author: String
  }

  input UserInput {
   email: String, password: String, name: String
  }

  input LoginInput {
  email: String, password: String
  }
`;

export const movieQueryTypeDefs = `
  movie(_id: ID): Movie
  movies(title:String,page: Int!): [Movie]
`;

export const movieMutationTypeDefs = `
 addMovie(input: MovieInput): Movie
`;

export const userMutationTypeDefs = `
  signupUser(input:UserInput): String
  loginUser(input:LoginInput): auth

`;
export const userTypeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }
    input UserInput {
    name: String
    email: String
    password: String
    }
`;

export const userQueryTypeDefs = `
  userDetail(_id: ID): User
`;

export const commentTypesDefs = `
input CommentInput {
name: String
  email: String
  text: String
  }

  type Comment {
  name: String
  email: String
  text: String
  date: Int
  movie_id: String
  }
`;

export const commentMutationTypeDefs = `
addComment(input: CommentInput): Comment
`;
