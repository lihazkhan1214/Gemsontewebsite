import { api_endpoint } from "@/constants";
import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient(api_endpoint);

export const Posts = async () => {
  const query = gql`
  query Posts {
    posts {
    authorbio
     authorname
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
      
        json
      }
    }
    
   
  }
  `;















  const response = await graphQLClient.request(query);
  return response;
};





// export const getSingleBlog = async (slug: string) => {
//   const query = gql`
//     query getSingleBlog($slug: String!) {
//       bloglist(where: { slug: $slug }) {
//         authorbio
//         authorname
//          title
//          updatedAt
//          publishedAt
//          slug
//          shortDescription
//          pictures {
//            url
//          }
//          birthSones
//          tableOfContent {
         
//            json
//          }
//       }
//     }
//   `;

//   const slugName = {
//     slug,
//   };

//   const response = await graphQLClient.request(query, slugName);
//   return response;
// };