import React from "react"
import styled from "styled-components"
import { BigWrapper, medWrapper, standardWrapper } from "../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PhotoGallery = ({ data }) => {
  return (
    <PhotoGallerySection>
      <div className="wrapper">
        <div className="galley-wrap">
          {data.gallery.map(photo => {
            const width = parseInt(Math.floor(Math.random() * 4) + 1)
            const height = parseInt(Math.floor(Math.random() * 4) + 1)
            const imageDisplay = getImage(
              photo.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = photo.altText
            return (
              <GalleryImage
                className="item"
                rndwidth={width}
                rndheight={height}
              >
                <div className="image-wrapper">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fixed"
                  />
                </div>
              </GalleryImage>
            )
          })}
        </div>
      </div>
    </PhotoGallerySection>
  )
}

const PhotoGallerySection = styled.div`
  .wrapper {
    ${standardWrapper};
    overflow: hidden;
  }
  .galley-wrap {
    column-count: 1;
    column-gap: 1rem;

    @media (min-width: 768px) {
      column-count: 2;
    }

    @media (min-width: 1025px) {
      column-count: 3;
    }

    @media (min-width: 1200px) {
      column-count: 3;
    }
  }

  .item {
    display: inline-block;
    padding: 1rem;
    width: auto;
  }
`

const GalleryImage = styled.div``

export default PhotoGallery
