import React from "react"
import { Row, Col, Image, Container } from "react-bootstrap"

type Props = {
  Articles: {
    title: string
    imageOne: {
      file: {
        url: any
      }
    }
    createdAt: any
  }
}
const MoreArticles: React.FC<Props> = ({ Articles }) => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <div className="more-articles-title">
            DON’T MISS THESE TRENDING HEALTH STORIES
          </div>
        </Row>
        <Row style={{ marginTop: "30px" }} className="justify-content-start">
          <Col>
            <Image
              style={{ width: "150px", height: "auto" }}
              src={Articles.imageOne.file.url}
            />
          </Col>
          <Col>
            <h3 style={{ fontSize: "16px", width: "100%" }}>
              {Articles.title}
            </h3>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MoreArticles
