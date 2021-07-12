import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  colors,
  fonts,
  H3Gold,
  H4IntroGold,
  standardWrapper,
  B2Gold,
} from "../../styles/helpers"

const LinkBoxes = ({ data }) => {
  console.log(data)
  return (
    <LinkBoxesSection>
      <div className="wrapper">
        {data.boxes.map((box, index) => {
          const imageDisplay = getImage(
            box.icon.localFile.childImageSharp.gatsbyImageData
          )
          const imageAlt = box.icon.altText
          return (
            <Box to={`/${box.slug}`} key={index}>
              <div className="icon">
                <div className="icon__inner">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fixed"
                  />
                </div>
              </div>
              <div className="titles">
                <h2>{box.title}</h2>
                <h3>{box.subTitle}</h3>
                <p>
                  Learn More <span>&#x3e;</span>
                </p>
              </div>
            </Box>
          )
        })}
      </div>
    </LinkBoxesSection>
  )
}

const LinkBoxesSection = styled.section`
  .wrapper {
    ${standardWrapper};
    justify-content: flex-start;
  }
`

const Box = styled(Link)`
  position: relative;
  width: 100%;
  background-color: ${colors.colorAccent};

  @media (min-width: 768px) {
    width: calc((100% / 2) - 2rem);
    margin: 1rem;
  }

  @media (min-width: 1025px) {
    width: calc((100% / 3) - 2rem);
    margin: 1rem;
    padding: 4rem 3rem;
  }

  .icon {
    width: 100%;

    &__inner {
      max-width: 4.5rem;
      height: 5rem;
      margin: 2rem auto;
    }
  }

  .titles {
    width: 100%;
    border-top: 0.2rem solid ${colors.colorTertiary};
    text-align: center;

    @media (min-width: 768px) {
      padding-bottom: 5rem;
    }

    h2 {
      ${H4IntroGold};
      margin-top: 3.75rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }

    h3 {
      ${H3Gold};
      margin: 0;
      font-family: ${fonts.fontSecondary};
      font-weight: normal;
    }

    p {
      ${B2Gold};
      margin: 0;

      @media (min-width: 768px) {
        position: absolute;
        right: 0;
        bottom: 2rem;
        left: 0;
      }
    }
  }
`

export default LinkBoxes
