import React from "react"
import { Row, Col, Image, Container } from "react-bootstrap"

type Props = {
  AuthImg: any
  AuthName: string
  AuthBio: string
}

const AuthorSection: React.FC<Props> = ({ AuthImg, AuthName, AuthBio }) => {
  return (
    <>
      <Container style={{}}>
        <h2 style={{ fontSize: "23px" }}>About Author</h2>
        <Row className="justify-content-start">
          <Col md="auto" xs={12}>
            <div style={{}}>
              <Image src={AuthImg} />
            </div>
          </Col>
          <Col md={9} xs={12}>
            <h3 style={{ color: "#126a96", fontSize: "18px" }}>{AuthName}</h3>
            <p>{AuthBio}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AuthorSection
