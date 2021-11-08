import React from "react"
import styled from "styled-components"
import BGImg from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

import DidYouKnowSlider from "./DidYouKnowSlider"

const getData = graphql`
  {
    didYouKnows: allWpDidYouKnow {
      edges {
        node {
          title
          didYouKnow {
            content
          }
        }
      }
    }
  }
`

const DidYouKnow = ({ data }) => {
  const dykData = useStaticQuery(getData)
  const didYouKnows = dykData.didYouKnows.edges
  if (!data.displayDidYouKnow) return null
  const heroImage = data.didYouKnowImage.localFile.childImageSharp.fluid
  return (
    <DidYouKnowSection>
      <div>
        <DidYouKnowSlider didYouKnows={didYouKnows} />
      </div>
      <div className="bgImage">
        <BGImg tag="div" fluid={heroImage} />
      </div>
    </DidYouKnowSection>
  )
}

const DidYouKnowSection = styled.section`
  position: relative;

  @media (min-width: 768px) {
    height: 65rem;
  }

  @media (min-width: 1025px) {
    height: 65rem;
  }

  .bgImage {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    @media (min-width: 768px) {
      width: 70%;
    }

    div {
      width: 100%;
      height: 100%;
    }
  }
`

export default DidYouKnow
