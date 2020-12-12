import React from "react"
// import Image from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import Seo from "../components/Seo"
// import "../css/article/helper.css"
// import "../css/article/responsive.css"
// import "../css/article/style.css"
// import "../js/article/main.js"

// type Props = {
//   data: {
//     artcl: {
//       article: {
//         article: string
//       }
//       description: {
//         description: string
//       }
//       mainImage: {
//         fluid: any
//         file: any
//       }
//       title: string
//     }
//     allPosts: {
//       nodes: {
//         title: string
//         slug: string
//         contentful_id: string
//         mainImage: {
//           fluid: any
//         }
//         smallImage: {
//           fluid: any
//         }
//         article: {
//           article: string
//         }
//         description: {
//           description: string
//         }
//       }[]
//     }
//   }
// }

const ComponentName: React.FC = ({}) => {
  // const {artcl, allPosts} = data
  return (
    <Layout>
      {/* <Seo title={artcl.title} description={artcl.description.description} image={artcl.mainImage.file}/> */}
      <h1>hello from article</h1>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    artcl: contentfulArticle(slug: { eq: $slug }) {
      authorName
      authorImage {
        fluid {
          src
        }
      }
      categories
      bodyPart2 {
        bodyPart2
      }
      bodyPart1 {
        bodyPart1
      }
      authorBio {
        authorBio
      }
      contentful_id
      createdAt
      imageOne {
        fluid {
          src
        }
      }
      imageTwo {
        fluid {
          src
        }
      }
      title
      sidebareImages {
        fluid {
          src
        }
      }
    }
    # allPosts:allContentfulPost(limit: 6) {
    #   nodes {
    #     article {
    #       article
    #     }
    #     description {
    #       description
    #     }
    #     smallImage {
    #       fluid {
    #         ...GatsbyContentfulFluid
    #       }
    #     }
    #     title
    #     slug
    #     contentful_id
    #   }
    # }
  }
`

export default ComponentName

// query GetAllPost {
//   allContentfulPost(limit: 6) {
//     nodes {
//       article {
//         article
//       }
//       description {
//         description
//       }
//       smallImage {
//         fluid {
//           src
//         }
//       }
//       title
//     }
//   }
// }
