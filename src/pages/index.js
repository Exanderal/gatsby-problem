import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <button
        onClick={() => {
          try {
            window.PPWidgetApp.toggleMap()
          } catch (e) {}
        }}
      >
        Toggle Widget
      </button>
    </Layout>
  )
}

export default IndexPage
