import React from "react"
import { Row, Col, Image, Container } from "react-bootstrap"

type Props = {
  previewImg: string
  link: string
  description: string
}
const MoreArticles: React.FC<Props> = ({ previewImg, link, description }) => {
  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <a href={link}>
          <Row style={{ marginTop: "30px" }} className="justify-content-start">
            <Col lg={4} md={4} sm={4} xs={4}>
              <Image
                style={{ width: "62px", height: "auto" }}
                src={previewImg}
              />
            </Col>
            <Col lg={8} md={8} sm={8} xs={8}>
              <h3 style={{ fontSize: "16px", width: "100%" }}>{description}</h3>
            </Col>
          </Row>
        </a>
      </Container>
    </>
  )
}

export default MoreArticles
