import React from "react"
// import Image from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Container, Row, Col } from "react-bootstrap"
import ImageSection from "../components/ImageSection"
import ArticleSection from "../components/ArticleSection"
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
        json: any
      }
      bodyPart2?: {
        json: any
      }
      bodyPart3?: {
        json: any
      }
      authorImage: {
        file: {
          url: any
        }
      }
      imageOne: {
        file: {
          url: any
        }
      }
      imageTwo?: {
        file: {
          url: any
        }
      }
      imageThree?: {
        file: {
          url: any
        }
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
  let image2 = artcl.imageTwo ? (
    <ImageSection Img={artcl.imageTwo.file.url} />
  ) : null
  let section2 = artcl.bodyPart2 ? (
    <ArticleSection Text={artcl.bodyPart1.json} />
  ) : null
  let image3 = artcl.imageThree ? (
    <ImageSection Img={artcl.imageThree.file.url} />
  ) : null
  let section3 = artcl.bodyPart3 ? (
    <ArticleSection Text={artcl.bodyPart3.json} />
  ) : null
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col lg={9} md={12}>
            <Row>
              <h1 className="article-title">{artcl.title}</h1>
            </Row>
            <Row>
              <ImageSection Img={artcl.imageOne.file.url} />
              <ArticleSection Text={artcl.bodyPart1.json} />
              {image2}
              {section2}
              {image3}
              {section3}
            </Row>
          </Col>
          <Col lg={3} md={12}>
            <Row>{/* <SidebarImages/> */}</Row>
            <Row>{/* <MoreArticles/> */}</Row>
          </Col>
        </Row>
        <Row>{/* <AuthorSection/> */}</Row>
      </Container>
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
        file {
          url
        }
      }
      categories
      bodyPart2 {
        json
      }
      bodyPart1 {
        json
      }
      authorBio {
        authorBio
      }
      contentful_id
      createdAt
      imageOne {
        file {
          url
        }
      }
      imageTwo {
        file {
          url
        }
      }
      title
      sidebareImages {
        file {
          url
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
