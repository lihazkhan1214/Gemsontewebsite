import { api_endpoint } from "@/constants";
import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient(api_endpoint);

export const Posts = async () => {
  const query = gql`
  query Posts {
    posts {
      title
      updatedAt
      publishedAt
      slug
      shortDescription
      pictures {
        url
      }
      birthSones
      tableOfContent {
        html
        json
      }
    }
    authorsConnection {
      edges {
        cursor
        node {
          bio
          id
          name
        }
      }
    }
   
  }
  `;















  const response = await graphQLClient.request(query);
  return response;
};



