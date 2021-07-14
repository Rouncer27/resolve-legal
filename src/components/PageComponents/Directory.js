import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  B2Brown,
  colors,
  fonts,
  H1Brown,
  H2Gold,
  H3Brown,
  medWrapper,
  standardWrapper,
} from "../../styles/helpers"

import BgGraphicOne from "../Graphics/BgGraphicOne"

const Directory = ({ data }) => {
  console.log("Directory here: ", data)
  return (
    <DirectorySection>
      <div className="wrapper">
        <div className="navigation">
          <ul>
            {data.sections.map((item, index) => {
              console.log(item)
              const imageDisplay = getImage(
                item.image.localFile.childImageSharp.gatsbyImageData
              )
              const imageAlt = item.image.altText
              const id = item.title
                .toLowerCase()
                .split("")
                .filter(char => char !== " ")
                .join("")
              return (
                <NavItem data-directoryid={id} key={index}>
                  <div className="title">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="image">
                    <GatsbyImage
                      image={imageDisplay}
                      alt={imageAlt}
                      layout="fixed"
                    />
                  </div>
                </NavItem>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="dirWrapper">
        <div className="directory">
          {data.sections.map((item, index) => {
            const id = item.title
              .toLowerCase()
              .split("")
              .filter(char => char !== " ")
              .join("")
            return (
              <div className="dir-section" data-directoryid={id} key={index}>
                <div className="section-title">
                  <h2>{item.sectionDirectoryTitle}</h2>
                </div>
                <div className="items">
                  {item.items.map((dirItem, index) => {
                    const imageDisplay = getImage(
                      dirItem.image.localFile.childImageSharp.gatsbyImageData
                    )
                    const imageAlt = dirItem.image.altText
                    return (
                      <DirItem key={index}>
                        <div className="logo-image">
                          <GatsbyImage
                            image={imageDisplay}
                            alt={imageAlt}
                            layout="fixed"
                          />
                        </div>
                        <div className="item-content">
                          <div>
                            <h3>{dirItem.title}</h3>
                          </div>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: dirItem.content,
                            }}
                          />
                        </div>
                      </DirItem>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="graphic">
        <BgGraphicOne />
      </div>
    </DirectorySection>
  )
}

const DirectorySection = styled.section`
  position: relative;
  padding: 5rem 0;
  overflow: hidden;

  .wrapper {
    ${medWrapper};
  }

  .dirWrapper {
    ${standardWrapper};
  }

  .navigation {
    width: 100%;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .directory {
    width: 100%;

    .dir-section {
      margin: 5rem auto;

      .section-title {
        width: 100%;
        margin-bottom: 5rem;
        text-align: center;

        h2 {
          ${H1Brown};
        }
      }

      .items {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }

  .graphic {
    position: absolute;
    top: -15rem;
    left: 0;
    width: 100%;
    height: 130rem;
    z-index: -1;
  }
`

const NavItem = styled.li`
  position: relative;
  width: calc(100% / 3);

  @media (min-width: 1025px) {
    width: calc((100% / 3) - 2rem);
    margin: 1rem;
  }

  .title {
    position: absolute;
    right: 2.5rem;
    bottom: -2.5rem;
    left: 2.5rem;
    padding: 2rem;
    background-color: ${colors.colorPrimary};
    text-align: center;
    z-index: 10;

    h2 {
      ${H2Gold};
      margin: 0;
      font-family: ${fonts.fontSecondary};
    }
  }
`

const DirItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: calc(100% / 2);
  margin: 2rem 0;

  .logo-image {
    width: calc(20%);
  }

  .item-content {
    width: calc(80%);
    padding: 0 2.5rem;

    h3 {
      ${H3Brown};
    }

    p {
      ${B2Brown};
    }
  }
`

export default Directory
