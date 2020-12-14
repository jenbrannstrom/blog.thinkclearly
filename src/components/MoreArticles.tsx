import React from "react"
import { Row, Col, Image, Container } from "react-bootstrap"

type Props = {
  Articles: {
    description: string
    previewImage: {
      file: {
        url: any
      }
    }
    articleLink: string
  }[]
}
const MoreArticles: React.FC<Props> = ({ Articles }) => {
  let sidebarArticles = Articles.map((art, index) => (
    <a key={index} href={art.articleLink}>
      <Row style={{ marginTop: "30px" }} className="justify-content-start">
        <Col lg={4} md={4} sm={4} xs={4}>
          <Image
            style={{ width: "62px", height: "auto" }}
            src={art.previewImage.file.url}
          />
        </Col>
        <Col lg={8} md={8} sm={8} xs={8}>
          <h3 style={{ fontSize: "16px", width: "100%" }}>{art.description}</h3>
        </Col>
      </Row>
    </a>
  ))

  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <div className="more-articles-title">
            DON’T MISS THESE TRENDING HEALTH STORIES
          </div>
        </Row>
        {sidebarArticles}
      </Container>
    </>
  )
}

export default MoreArticles
