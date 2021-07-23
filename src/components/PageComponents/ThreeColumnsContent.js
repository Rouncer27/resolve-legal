import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Brown,
  colors,
  fonts,
  H2Gold,
  medWrapper,
  fontSizer,
} from "../../styles/helpers"
import { Link } from "gatsby"

const ThreeColumnsContent = ({ data }) => {
  return (
    <ThreeColumnsContentSection>
      <div className="wrapper">
        {data.columns.map((col, index) => {
          console.log(col)
          const imageDisplay = getImage(
            col.image.localFile.childImageSharp.gatsbyImageData
          )
          const imageAlt = col.image.altText
          return (
            <Column key={index}>
              {col.linkRequired ? (
                <Link to={`/${col.linkSlug}`}>
                  <div className="col-image">
                    <GatsbyImage
                      image={imageDisplay}
                      alt={imageAlt}
                      layout="fixed"
                    />
                  </div>
                  <div className="col-title">
                    <h2>{col.title}</h2>
                  </div>
                  <div
                    className="col-content"
                    dangerouslySetInnerHTML={{ __html: col.content }}
                  />
                </Link>
              ) : (
                <>
                  <div className="col-image">
                    <GatsbyImage
                      image={imageDisplay}
                      alt={imageAlt}
                      layout="fixed"
                    />
                  </div>
                  <div className="col-title">
                    <h2>{col.title}</h2>
                  </div>
                  <div
                    className="col-content"
                    dangerouslySetInnerHTML={{ __html: col.content }}
                  />
                </>
              )}
            </Column>
          )
        })}
      </div>
    </ThreeColumnsContentSection>
  )
}

const ThreeColumnsContentSection = styled.section`
  padding-top: 3rem;

  .wrapper {
    ${medWrapper};
  }
`

const Column = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: calc(33.333333% - 2rem);
    margin: 2rem 1rem;
  }

  .col-title {
    position: relative;
    width: calc(100% - 4rem);
    margin: auto 2rem;
    margin-top: -5rem;
    padding: 2rem;
    background-color: ${colors.colorPrimary};
    text-align: center;
    z-index: 100;

    h2 {
      ${H2Gold};
      margin: 0;
      padding: 0;
      font-family: ${fonts.fontSecondary};
    }
  }

  .col-content {
    padding: 2rem;

    p {
      ${B1Brown};
      ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
    }
  }
`

export default ThreeColumnsContent
