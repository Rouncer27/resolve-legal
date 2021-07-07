import React from "react"
import styled from "styled-components"
import {
  B1Gold,
  B1White,
  Btn1GoldRev,
  colors,
  H1Gold,
  medWrapper,
} from "../../styles/helpers"
import ElementTag from "../../utils/ElementTag"
import { Link } from "gatsby"

const ContentBlockOne = ({ data }) => {
  console.log(data)

  const leftTitle = ElementTag(data.leftTitleTag, data.leftTitle)
  const rightTitle = ElementTag(data.rightTitleTag, data.rightTitle)
  return (
    <ContentBlockOneSection
      bgcolor={data.backgroundColor}
      rightbtn={data.rightButtonRequired}
    >
      <div className="wrapper">
        <div className="content-left">
          <div>{leftTitle}</div>
          <div dangerouslySetInnerHTML={{ __html: data.leftContent }} />
        </div>

        <div className="content-right">
          <div>{rightTitle}</div>
          <div dangerouslySetInnerHTML={{ __html: data.rightContent }} />
          {data.rightButtonRequired && (
            <div className="content-right__btn">
              <Link to={`/${data.rightButtonSlug}`}>
                {data.rightButtonText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </ContentBlockOneSection>
  )
}

const ContentBlockOneSection = styled.section`
  padding: 5rem 0;
  background-color: ${props =>
    props.bgcolor === "brown" ? colors.colorAccent : colors.colorPrimary};

  .wrapper {
    ${medWrapper};
  }

  .content-left {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
      padding: 0 5rem;
      border-right: 0.1rem solid ${colors.colorTertiary};
    }

    h1,
    h2,
    h3,
    h4 {
      ${H1Gold};
      margin-top: 0;
    }

    p {
      ${B1White};
    }
  }

  .content-right {
    position: relative;
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
      padding: 0 5rem;
    }

    h1,
    h2,
    h3,
    h4 {
      ${H1Gold};
    }

    p {
      ${B1Gold};
    }

    &__btn {
      width: 100%;

      @media (min-width: 768px) {
        position: absolute;
        bottom: 2rem;
        left: 5rem;
      }

      a {
        ${Btn1GoldRev};
        min-width: 25rem;
      }
    }
  }
`

export default ContentBlockOne
