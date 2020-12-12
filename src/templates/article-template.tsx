import React from "react"
// import Image from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import Seo from "../components/Seo"
// import "../css/article/helper.css"
// import "../css/article/responsive.css"
// import "../css/article/style.css"
// import "../js/article/main.js"

type Props = {
  data: {
    artcl: {
      contentful_id: any
      createdAt: any
      bodyPart1: {
        bodyPart1: string
      }
      bodyPart2?: {
        bodyPart2: string
      }
      bodyPart3?: {
        bodyPart3: string
      }
      authorImage: {
        fluid: any
      }
      imageOne: {
        fluid: any
      }
      imageTwo?: {
        fluid: any
      }
      imageThree?: {
        fluid: any
      }
      sidebareImages?: {
        fluid: any
      }
      title: string
      authorName: string
      categories: string
    }
  }
}

const ComponentName: React.FC<Props> = ({ data }) => {
  const { artcl } = data
  return (
    <Layout>
      {/* <Seo title={artcl.title} description={artcl.description.description} image={artcl.mainImage.file}/> */}
      {/* <h1>hello from {artcl.title}</h1> */}
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    artcl: contentfulArticle(slug: { eq: $slug }) {
      authorName
      authorImage {
        fluid {
          ...GatsbyContentfulFluid
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
          ...GatsbyContentfulFluid
        }
      }
      imageTwo {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      title
      sidebareImages {
        fluid {
          ...GatsbyContentfulFluid
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
