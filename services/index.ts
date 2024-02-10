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
      featuredimage{
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









export const Articles = async () => {
  const query = gql`
    query Articles {
      articles12 {
        slug
        shortDescription
        title1212
        featuredimage{
          url
        }
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
        birthSones
        category
        seoTitle
        seoDescription
        
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


























export const getSingleArticle = async (slug: string) => {
  const query = gql`
    query SingleArticle($slug: String!) {
      articles(where: {slug: $slug}) {
        authorbio
        authorname
        publishedAt
        title1212
        seoTitle
        seoDescription
        featuredimage{
          url
        }
        updatedAt
        createdBy{
          name
        }
        tableOfContent {
          json
        }
        authorPicture {
          url
        }
        articlePicture {
          url
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