import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello from Lucmedia</h1>
    <h2>Sub header goes here</h2>
    <p>Just playing around with Gatsby.</p>
    <p>Let's finally learn how a headless CMS actually works :)</p>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Visit page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
