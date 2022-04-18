import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      totalCount
      edges {
        node {
          id
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          ownerAvatarUrl
          language
        }
      }
    }
  } 
`;

export const VERIFY_LOGGEDIN = gql`
  query {
    me {
      id
    }
  }
`;