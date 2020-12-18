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
import Footer from "../components/Footer"
import Mainav from "../components/Mainav"
import Mainnavbar from "../components/Mainnavbar"

type Props = {
  data: {
    artcl: {
      contentful_id: any
      createdAt: any
      authorBio: {
        authorBio: string
      }
      authorImage: {
        file: {
          url: any
        }
      }
      authorName: string
      categories: string
      sponsoringText: string
      footerLink: {
        footerLink: string
      }
      footerNormalText: {
        footerNormalText: string
      }
      footerText: {
        footerText: string
      }
      footerLink2: string
      footerText2: string
      navbar: {
        navbarLinkName: string
        navbarLink: string
      }[]
      title: string
      articleBody: {
        id: number
        image?: {
          file: {
            url: any
          }
        }
        hyperlink?: string
        title?: string
        text?: {
          json: any
        }
      }[]
      sidebar: {
        id: number
        hyperlink?: string
        image?: {
          file: {
            url: any
          }
        }
        description?: string
        articleLink?: string
        previewImage?: {
          file: {
            url: string
          }
        }
      }[]
      previewImage: {
        file: {
          url: string
        }
      }
    }
  }
}

const ComponentName: React.FC<Props> = ({ data }) => {
  const { artcl } = data
  let aticleBody = null,
    sidebar = null

  if (artcl.articleBody) {
    aticleBody = artcl.articleBody.map((section: any, index: any) => {
      if (section.image) {
        return (
          <a key={index} href={section.hyperlink}>
            <ImageSection Img={section.image.file.url} />
          </a>
        )
      } else if (section.text) {
        return <ArticleSection key={index} Text={section.text.json} />
      } else {
        return null
      }
    })
  }

  if (artcl.sidebar) {
    sidebar = artcl.sidebar.map((section: any, index: any) => {
      if (section.image) {
        return (
          <SidebarImages
            key={index}
            ImageLink={section.hyperlink}
            Img={section.image.file.url}
          />
        )
      } else if (section.articleLink) {
        return (
          <MoreArticles
            key={index}
            previewImg={section.previewImage.file.url}
            link={section.articleLink}
            description={section.description}
          />
        )
      } else {
        return null
      }
    })
  }

  return (
    <Layout>
      <Seo
        title={artcl.title}
        description={artcl.title}
        image={artcl.previewImage.file.url}
      />
      <Row>
        <Col className="toggled-nav" lg={12} md={6} sm={8} xs={8}>
          <Mainav />
        </Col>
        <Col className="toggled-nav" lg={12} md={6} sm={4} xs={4}>
          <Mainnavbar Links={artcl.navbar} />
        </Col>
      </Row>
      <Container>
        <Row>
          <Col
            style={{ maxWidth: "862px" }}
            className="article-body"
            lg={8}
            md={12}
          >
            <Row>
              <Col className="sponsored" lg={12} md={12} sm={12} xs={12}>
                <p>
                  {artcl.sponsoringText !== "#" ? artcl.sponsoringText : null}
                </p>
              </Col>
              <Col className="article-title" lg={12} md={12} sm={12} xs={12}>
                <h1>{artcl.title}</h1>
              </Col>
            </Row>
            <Row>
              {aticleBody}
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
            <Row className="img-container">{sidebar}</Row>
          </Col>
        </Row>
        <Footer
          FooterText={artcl.footerText.footerText}
          FooterLink={artcl.footerLink.footerLink}
          FooterText2={artcl.footerText2}
          FooterLink2={artcl.footerLink2}
          footerNormalText={artcl.footerNormalText.footerNormalText}
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    artcl: contentfulArticle(slug: { eq: $slug }) {
      __typename

      previewImage {
        file {
          url
        }
      }
      createdAt
      sponsoringText
      authorBio {
        authorBio
      }
      authorImage {
        file {
          url
        }
      }
      authorName
      categories
      contentful_id
      footerLink {
        footerLink
      }
      footerNormalText {
        footerNormalText
      }
      footerText {
        footerText
      }
      footerLink2
      footerText2
      navbar {
        navbarLinkName
        navbarLink
      }
      title
      articleBody {
        __typename
        ... on Node {
          ... on ContentfulImageWithHyperlinkSection {
            id
            image {
              file {
                url
              }
            }
            hyperlink
          }
        }
        ... on Node {
          ... on ContentfulTextSection {
            id
            title
            text {
              json
            }
          }
        }
      }
      sidebar {
        __typename

        ... on Node {
          ... on ContentfulImageWithHyperlinkSection {
            id
            hyperlink
            image {
              file {
                url
              }
            }
          }
        }

        ... on Node {
          ... on ContentfulSidebarArticle {
            id
            description
            articleLink
            previewImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`

export default ComponentName
