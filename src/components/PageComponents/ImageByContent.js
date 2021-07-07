import React from "react"
import styled from "styled-components"
import BGImg from "gatsby-background-image"
import {
  B1White,
  Btn1GoldRev,
  colors,
  H1Gold,
  standardWrapper,
} from "../../styles/helpers"
import ElementTag from "../../utils/ElementTag"
import { Link } from "gatsby"

const ImageByContent = ({ data }) => {
  const mainTitleDisplay = ElementTag(data.titleTag, data.title)
  const image = data.image.localFile.childImageSharp.fluid
  return (
    <ImageByContentStyled bgcolor={data.backgroundColor}>
      <div className="image-side">
        <div className="image-side__wrap">
          <BGImg tag="div" fluid={image} />
        </div>
      </div>
      <div className="wrapper">
        <div className="content-side">
          <div>
            <div>{mainTitleDisplay}</div>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
            {data.buttonRequired && (
              <div className="link-button">
                <Link to={`/${data.buttonSlug}`}>{data.buttonText}</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </ImageByContentStyled>
  )
}

const ImageByContentStyled = styled.section`
  position: relative;
  min-height: 42.5rem;
  background-color: ${props =>
    props.bgcolor === "dkBlue" ? colors.colorPrimary : colors.colorSecondary};

  .wrapper {
    ${standardWrapper};
  }

  .image-side {
    position: relative;
    width: 100%;
    height: 40rem;
    z-index: 1;

    @media (min-width: 768px) {
      position: absolute;
      align-items: center;
      top: 0;
      left: 0;
      width: calc(33.333333%);
      height: 100%;
    }

    &__wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      div {
        width: 100%;
        height: 100%;
      }
    }
  }

  .content-side {
    width: 100%;
    display: flex;
    align-items: center;
    align-self: center;

    @media (min-width: 768px) {
      width: calc(66.666666%);
      margin-left: 33.333333%;
      padding: 2rem 4rem;
      min-height: 42.5rem;
    }

    h1,
    h2,
    h3,
    h4 {
      ${H1Gold};
    }

    p {
      ${B1White};
    }

    .link-button {
      margin-top: 5rem;
      padding-bottom: 5rem;

      @media (min-width: 768px) {
        padding-bottom: 1rem;
      }

      a {
        ${Btn1GoldRev};
        min-width: 25rem;
      }
    }
  }
`

export default ImageByContent
