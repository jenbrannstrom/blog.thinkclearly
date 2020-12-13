import React from "react"
// import Image from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Container, Row, Col } from "react-bootstrap"
import ImageSection from "../components/ImageSection"
import ArticleSection from "../components/ArticleSection"
import AuthorSection from "../components/AuthorSection"
import SidebarImages from "../components/SidebarImages"
import MoreArticles from "../components/MoreArticles"

type Props = {
  data: {
    artcl: {
      contentful_id: any
      createdAt: any
      bodyPart1: {
        json: any
      }
      bodyPart2: {
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
      imageTwo: {
        file: {
          url: any
        }
      }
      sidebareImages: {
        file: {
          url: any
        }
      }[]
      title: string
      authorName: string
      authorBio: {
        authorBio: string
      }
      categories: string
      similarArticles: {
        article: {
          title: string
          imageOne: {
            file: {
              url: any
            }
          }
          createdAt: any
        }[]
      }[]
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
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col style={{ paddingRight: "75px" }} lg={9} md={12}>
            <Row>
              <h1 className="article-title">{artcl.title}</h1>
            </Row>
            <Row>
              <ImageSection Img={artcl.imageOne.file.url} />
              <ArticleSection Text={artcl.bodyPart1.json} />
              {image2}
              {section2}
              <div className="categories">
                <p>{`CATEGORIES : ${artcl.categories}`}</p>
              </div>
              <Row>
                <AuthorSection
                  AuthImg={artcl.authorImage.file.url}
                  AuthName={artcl.authorName}
                  AuthBio={artcl.authorBio.authorBio}
                />
              </Row>
            </Row>
          </Col>
          <Col lg={3} md={12}>
            <Row>
              <SidebarImages Img={artcl.sidebareImages[0].file.url} />
            </Row>
            <Row>
              <MoreArticles Articles={artcl.similarArticles[0].article[0]} />
            </Row>
          </Col>
        </Row>
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
      bodyPart1 {
        json
      }
      bodyPart2 {
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
      similarArticles {
        article {
          title
          imageOne {
            file {
              url
            }
          }
          createdAt
        }
      }
    }
  }
`

export default ComponentName
