import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import {
  standardWrapper,
  BigWrapper,
  colors,
  H1Brown,
  B1Brown,
  fontSizer,
  Btn1GoldRev,
  H3Gold,
} from "../styles/helpers"

import Wysiwyg from "../components/PageComponents/Wysiwyg"
import BgGraphicOne from "../components/Graphics/BgGraphicOne"

const Post = props => {
  const { post, allPosts } = props.data
  const prevPost = props.pageContext.prev
  const nextPost = props.pageContext.next

  console.log(post)

  const imageDisplay = getImage(
    post.acfPosts.featuredImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = post.acfPosts.featuredImage.altText

  return (
    <Layout>
      <Seo title={post.title} />
      <PostMain>
        <TitleComponent>
          <div className="title-wrapper">
            <div className="image">
              <GatsbyImage image={imageDisplay} alt={imageAlt} layout="fixed" />
            </div>
            <div className="title">
              <div className="title__inner">
                <h1>{post.title}</h1>
              </div>
              <div className="title__content">
                <p>{post.acfPosts.quoteUnderTitle}</p>
              </div>
            </div>
          </div>
        </TitleComponent>
        <ArticleContent>
          <div className="main-content">
            <Wysiwyg
              fontsize="small"
              data={{ wysiwyg: post.acfPosts.content }}
            />
          </div>
          <div className="side-quote">
            <p>{post.acfPosts.quoteOnSide}</p>
          </div>
        </ArticleContent>
        <PostNav>
          <Link to="/resources">Back To All Articles</Link>
        </PostNav>
        <div className="graphic">
          <BgGraphicOne />
        </div>
      </PostMain>
    </Layout>
  )
}

const PostMain = styled.main`
  position: relative;

  .wrapper {
    ${standardWrapper};
  }

  .graphic {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75%;
    z-index: -1;
  }
`

const TitleComponent = styled.section`
  padding: 5rem 0;

  .title-wrapper {
    ${BigWrapper};
    align-items: center;
    padding: 0;
  }

  .image {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(35%);
    }
  }

  .title {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(65% - 4rem);
      margin-left: 4rem;
    }

    &__content {
      @media (min-width: 1025px) {
        max-width: 60rem;
        margin-right: auto;
      }

      p {
        ${B1Brown};
        ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
      }
    }

    h1,
    h2,
    h3,
    h4 {
      ${H1Brown};
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    &__inner {
      border-top: solid 0.2rem ${colors.colorTertiary};
    }
  }
`

const ArticleContent = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  max-width: 110rem;
  margin: auto;
  padding: 2.5rem;

  .main-content {
    width: 80%;
    padding: 0 2rem;
  }

  .side-quote {
    width: 20%;
    padding: 2.5rem 1rem 2.5rem 0;

    p {
      ${H3Gold};
      line-height: 1.39;
    }
  }
`

const PostNav = styled.div`
  ${standardWrapper};

  a {
    ${Btn1GoldRev};
  }
`

export const query = graphql`
  query singlePostQuery($slug: String!) {
    post: wpPost(slug: { eq: $slug }) {
      id
      date
      slug
      title
      acfPosts {
        content
        quoteUnderTitle
        quoteOnSide
        featuredImage {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1000)
            }
          }
        }
      }
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
