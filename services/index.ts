import { api_endpoint } from "@/constants";
import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient(api_endpoint);

export const Posts = async () => {
  const query = gql`
  query Posts {
    posts {
    
      title
    
      slug
      shortDescription
      polishedImg {
        url
      }
      birthSones
      birthDescription
      category
     
    }
    
   
  }
  `;















  const response = await graphQLClient.request(query);
  return response;
};



























export const getSingleBlog = async (slug: string) => {
  const query = gql`
    query SignlePost($slug: String!) {
      post(where: { slug: $slug }) {
        authorname
        authorbio
        birthSones
        category
        jewelry {
          url
        }
        rough {
          url
        }
        polishedImg {
          url
        }
        publishedAt
        updatedAt
        title
        tableOfContent {
          json
        }
        createdBy {
          name
        }
      }
    }
  `;

  const variables = {
    slug,
  };

  const response = await graphQLClient.request(query, variables);
  return response;
};





export const getBlogcategories = async ({ slug }: { slug: string[] }) => {
  const query = gql`
    query CategoryPosts($slug: [String!]!) {
      posts(where: { category_in: $slug }) {
        title
        slug
        shortDescription
        polishedImg {
          url
        }
        birthSones
        birthDescription
        category
      }
    }
  `;

  const variables = {
    slug,
  };

  const response = await graphQLClient.request(query, variables);
  return response;
};


