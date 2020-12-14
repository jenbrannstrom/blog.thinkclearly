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
import Seo from "../components/Seo"

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
        description: string
        previewImage: {
          file: {
            url: any
          }
        }
        articleLink: string
      }[]
      previewImage: {
        file: {
          url: any
        }
      }
      imageLink: string
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
  console.log(artcl.imageLink)
  return (
    <Layout>
      <Seo
        title={artcl.title}
        description={artcl.title}
        image={artcl.imageOne.file.url}
      />
      <Container>
        <Row>
          <Col
            style={{ maxWidth: "862px" }}
            className="article-body"
            lg={8}
            md={12}
          >
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
          <Col lg={4} md={12}>
            <Row>
              <SidebarImages
                ImageLink={artcl.imageLink}
                Img={artcl.sidebareImages[0].file.url}
              />
            </Row>
            <Row className="img-container">
              <MoreArticles Articles={artcl.similarArticles} />
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    artcl: contentfulArticle(slug: { eq: $slug }) {
      imageLink
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
        articleLink
        description
        previewImage {
          file {
            url
          }
        }
      }
      previewImage {
        file {
          url
        }
      }
    }
  }
`

export default ComponentName
