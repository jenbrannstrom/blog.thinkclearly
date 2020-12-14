import * as React from "react"
import logo from "../images/home/logo.png"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage: React.FC = ({}) => {
  return (
    <Layout>
      <Seo title="news headlines" image={logo} />
      <div>
        <h1 style={{ height: "400px !important" }}>COMING SOON ..</h1>
      </div>
    </Layout>
  )
}

export default IndexPage
