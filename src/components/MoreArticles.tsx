import React from "react"
import { Row, Col, Image, Container } from "react-bootstrap"

type Props = {
  Articles: {
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
const MoreArticles: React.FC<Props> = ({ Articles }) => {
  let sidebarArticles = Articles.map(art => (
    <Row style={{ marginTop: "30px" }} className="justify-content-start">
      <Col>
        <Image
          style={{ width: "150px", height: "auto" }}
          src={art.article[0].imageOne.file.url}
        />
      </Col>
      <Col>
        <h3 style={{ fontSize: "16px", width: "100%" }}>
          {art.article[0].title}
        </h3>
      </Col>
    </Row>
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
