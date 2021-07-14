import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Brown,
  H1Brown,
  medWrapper,
  fontSizer,
  Btn1GoldRev,
} from "../../styles/helpers"

import ElementTag from "../../utils/ElementTag"
import BgGraphicOne from "../Graphics/BgGraphicOne"
import { Link } from "gatsby"

const ImageSimpleContent = ({ data }) => {
  const mainTitleDisplay = ElementTag(data.titleTag, data.title)
  const imageDisplay = getImage(
    data.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.image.altText
  return (
    <ImageSimpleContentSection reverseimg={data.reverseImage}>
      <div className="wrapper">
        <div className="image">
          <GatsbyImage image={imageDisplay} alt={imageAlt} layout="fixed" />
        </div>
        <div className="content">
          {mainTitleDisplay}
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
          {data.buttonRequired && (
            <div className="button">
              <Link to={data.buttonSlug}>{data.buttonText}</Link>
            </div>
          )}
        </div>
      </div>
      {data.backgroundGraphic && (
        <div className="graphic">
          <BgGraphicOne />
        </div>
      )}
    </ImageSimpleContentSection>
  )
}

const ImageSimpleContentSection = styled.section`
  position: relative;
  padding: 5rem 0;

  .wrapper {
    ${medWrapper};
    align-items: center;
    flex-direction: ${props => (props.reverseimg ? "row" : "row-reverse")};
  }

  .image {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50% - 4rem);
      margin-right: ${props => (props.reverseimg ? "4rem" : "0rem")};
      margin-left: ${props => (props.reverseimg ? "0rem" : "4rem")};
    }
  }

  .content {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
    }

    h1,
    h2,
    h3,
    h4 {
      ${H1Brown};
      margin-top: 0;
      font-weight: normal;
    }

    p {
      ${B1Brown};
      ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};

      &:last-of-type {
        margin: 0;
      }
    }

    .button {
      width: 100%;
      margin-top: 2.5rem;

      a {
        ${Btn1GoldRev};
      }
    }
  }

  .graphic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 140%;
    z-index: -1;
  }
`

export default ImageSimpleContent
