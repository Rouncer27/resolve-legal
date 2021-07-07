import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const Post = props => {
  const { post, allPosts } = props.data
  const prevPost = props.pageContext.prev
  const nextPost = props.pageContext.next
  return (
    <Layout>
      <Seo />
      <h1>POST</h1>
    </Layout>
  )
}

export const query = graphql`
  query singlePostQuery($slug: String!) {
    post: wpPost(slug: { eq: $slug }) {
      title
      id
      date
      slug
      categories {
        nodes {
          name
        }
      }
    }

    allPosts: allWpPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default Post
