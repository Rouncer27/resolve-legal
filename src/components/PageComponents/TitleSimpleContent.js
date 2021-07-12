import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  medWrapper,
  H1Brown,
  B1Brown,
  colors,
  Btn1GoldRev,
} from "../../styles/helpers"
import ElementTag from "../../utils/ElementTag"

import BgGraphicOne from "../Graphics/BgGraphicOne"

const TitleSimpleContent = ({ data }) => {
  const mainTitleDisplay = ElementTag(data.titleTag, data.title)
  return (
    <TitleSimpleContentSection id={data.sectionId}>
      <div className="wrapper">
        <div className="title">{mainTitleDisplay}</div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
      {data.backgroundGraphic && (
        <div className="graphic">
          <BgGraphicOne />
        </div>
      )}
      {data.buttonRequired && (
        <div className="link-buttons">
          <Link to={`/${data.buttonOneSlug}`}>{data.buttonOneText}</Link>
          {data.sectionButtonRequired && (
            <Link to={`/${data.buttonTwoSlug}`}>{data.buttonTwoText}</Link>
          )}
        </div>
      )}
    </TitleSimpleContentSection>
  )
}

const TitleSimpleContentSection = styled.div`
  position: relative;

  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;

    h1,
    h2,
    h3,
    h4 {
      ${H1Brown};
      margin-top: 1rem;
    }
  }

  .content {
    width: 100%;

    p {
      ${B1Brown};
    }
  }

  .link-buttons {
    width: 100%;
    padding-bottom: 5rem;
    text-align: center;

    a {
      ${Btn1GoldRev};
      min-width: 25rem;
      margin: 2rem;
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

export default TitleSimpleContent
