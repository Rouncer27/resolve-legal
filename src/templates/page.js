import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import PageComponentGroups from "../components/PageComponentGroups"

const Page = props => {
  const { components, seo } = props.data
  return (
    <Layout>
      <Seo title={`Page Template`} />
      <h1>Page</h1>
      <PageComponentGroups />
    </Layout>
  )
}

export const pageTempQuery = graphql`
  query pageTempPage($id: String!) {
    seo: wpPage(id: { eq: $id }) {
      pageSeoData {
        swbThemeDescription
        swbThemeMetaTitle
        swbThemeImage {
          localFile {
            relativePath
          }
        }
      }
    }

    pageStyles: wpPage(id: { eq: $id }) {
      acfPageStyles {
        backgroundGraphicActive
        heroImageTop
      }
    }
  }
`

export default Page
