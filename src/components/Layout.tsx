// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.org/docs/use-static-query/
//  */

import React from "react"
import Mainav from "./Mainav"
import Mainnavbar from "./Mainnavbar"
import Footer from "./Footer"
import { Col, Row } from "react-bootstrap"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./Header"
// import Footer from "./Footer"
// import "./layout.css"

type Props = {
  children?: any
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="layout">
        {/* <Container className="layout"> */}
        <Row>
          <Col className="toggled-nav" lg={12} md={6} sm={8}>
            <Mainav />
          </Col>
          <Col className="toggled-nav" lg={12} md={6} sm={4}>
            <Mainnavbar />
          </Col>
        </Row>
        {/* </Container> */}
        {/* <Header/>
                <main>
                    {children}
                </main>
                <Footer/> */}
        {children}
        <Footer />
      </div>
    </>
  )
}
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
