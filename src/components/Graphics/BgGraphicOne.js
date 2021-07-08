import React from "react"
import BGImg from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const getData = graphql`
  {
    image: file(relativePath: { eq: "background-graphic.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const BgGraphicOne = () => {
  const data = useStaticQuery(getData)
  const heroImage = data.image.childImageSharp.fluid
  return (
    <BgGraphicOneStyled>
      <BGImg tag="div" fluid={heroImage} />
    </BgGraphicOneStyled>
  )
}

const BgGraphicOneStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;

  div {
    position: absolute !important;
    width: 100% !important;
    height: 100% !important;

    &::before,
    &::after {
      background-position: center top !important;
      background-repeat: repeat !important;
      background-size: calc(2736px / 3) calc(2736px / 3) !important;
    }
  }
`

export default BgGraphicOne
