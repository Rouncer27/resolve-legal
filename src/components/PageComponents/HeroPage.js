import React from "react"
import BGImg from "gatsby-background-image"
import styled from "styled-components"
import BgGraphicOne from "../Graphics/BgGraphicOne"

const HeroPage = ({ data }) => {
  const heroImage = data.image.localFile.childImageSharp.fluid
  return (
    <HeroPageStyled>
      <div className="heroImage">
        <BGImg tag="div" fluid={heroImage} />
      </div>
      <div className="graphic">
        <BgGraphicOne />
      </div>
    </HeroPageStyled>
  )
}

const HeroPageStyled = styled.div`
  position: relative;
  height: 40rem;
  margin-top: 10rem;
  margin-bottom: 10rem;
  z-index: 999999;

  @media (min-width: 768px) {
    height: 50rem;
  }

  @media (min-width: 1025px) {
    height: 65rem;
  }

  .heroImage {
    position: absolute;
    top: 4.5rem;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    div {
      width: 100%;
      height: 100%;
    }
  }

  .graphic {
    position: absolute;
    top: -25%;
    left: 0;
    width: 100%;
    height: 150%;
    z-index: -1;
  }
`

export default HeroPage
