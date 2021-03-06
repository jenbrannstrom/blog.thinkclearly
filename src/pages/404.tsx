import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1 className="error-msg">404</h1>
    <h1 className="error-msg">PAGE NOT FOUND</h1>
  </Layout>
)

export default NotFoundPage
